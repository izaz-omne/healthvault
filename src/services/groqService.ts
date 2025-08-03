import Groq from "groq-sdk";

export interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
  timestamp?: Date;
}

export class GroqHealthAssistant {
  private groq: Groq;
  private conversationHistory: ChatMessage[] = [];

  constructor() {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey) {
      throw new Error('GROQ API key not found in environment variables');
    }

    this.groq = new Groq({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // Allow browser usage
    });
  }

  private async searchInternet(query: string): Promise<string> {
    try {
      // Use a CORS-friendly search API or implement server-side proxy
      // For now, we'll simulate search results
      return `I searched for "${query}" and found relevant medical information. Please note that this is a demo implementation.`;
    } catch (error) {
      console.error('Search error:', error);
      return 'Unable to search the internet at this time.';
    }
  }

  private determineIfSearchNeeded(message: string): boolean {
    const searchTriggers = [
      'latest', 'recent', 'current', 'new', 'today', 'news',
      'research', 'study', 'clinical trial', 'drug information',
      'medication', 'treatment', 'symptoms', 'what is', 'tell me about'
    ];
    
    return searchTriggers.some(trigger => 
      message.toLowerCase().includes(trigger.toLowerCase())
    );
  }

  private createSystemPrompt(searchResults: string = ''): string {
    return `You are a knowledgeable AI Health Assistant for HealthVault, a digital health platform. 
      
Guidelines:
- Provide helpful, accurate health information
- Always recommend consulting healthcare professionals for medical advice
- Be empathetic and supportive
- Focus on health education and general wellness
- Keep responses concise but informative
- Format lists using bullet points (•) instead of asterisks
- Use clear, well-structured formatting
${searchResults ? `\nInternet Search Results: ${searchResults}` : ''}

Please provide a helpful response to the user's health-related question. Use bullet points (•) for lists and avoid using asterisks (*) for formatting.`;
  }

  async sendMessage(message: string): Promise<ChatMessage> {
    try {
      // Add user message to history
      const userMessage: ChatMessage = {
        type: 'user',
        content: message,
        timestamp: new Date()
      };
      this.conversationHistory.push(userMessage);

      // Determine if internet search is needed
      const needsSearch = this.determineIfSearchNeeded(message);
      let searchResults = '';

      if (needsSearch) {
        console.log('Searching internet for:', message);
        searchResults = await this.searchInternet(message);
      }

      // Create conversation history for context
      const conversationContext = this.conversationHistory
        .slice(-6) // Keep last 6 messages for context
        .map(msg => `${msg.type === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
        .join('\n');

      // Create messages array for Groq API
      const messages = [
        {
          role: "system" as const,
          content: this.createSystemPrompt(searchResults)
        },
        {
          role: "user" as const,
          content: `Previous conversation:\n${conversationContext}\n\nCurrent question: ${message}`
        }
      ];

      // Call Groq API
      const completion = await this.groq.chat.completions.create({
        messages,
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 1000,
      });

      const responseContent = completion.choices[0]?.message?.content || 'I apologize, but I received an empty response. Please try again.';

      // Create AI response message
      const aiMessage: ChatMessage = {
        type: 'ai',
        content: responseContent,
        timestamp: new Date()
      };

      // Add to history
      this.conversationHistory.push(aiMessage);

      return aiMessage;
    } catch (error) {
      console.error('Error in sendMessage:', error);
      
      const errorMessage: ChatMessage = {
        type: 'ai',
        content: `I apologize, but I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or check your API configuration.`,
        timestamp: new Date()
      };

      return errorMessage;
    }
  }

  getConversationHistory(): ChatMessage[] {
    return [...this.conversationHistory];
  }

  clearHistory(): void {
    this.conversationHistory = [];
  }
}

// Singleton instance
let groqInstance: GroqHealthAssistant | null = null;

export const getGroqHealthAssistant = (): GroqHealthAssistant => {
  if (!groqInstance) {
    groqInstance = new GroqHealthAssistant();
  }
  return groqInstance;
};
