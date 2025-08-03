import { useState, useCallback, useRef } from 'react';
import { getGroqHealthAssistant, ChatMessage } from '../services/groqService';

export interface UseAIReturn {
  messages: ChatMessage[];
  sendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearMessages: () => void;
}

export const useAI = (): UseAIReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'ai',
      content: "Hello! I'm your AI Health Assistant powered by LLaMA 3.3. I can help answer questions about your health, medications, and provide the latest medical information from the internet. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const assistantRef = useRef(getGroqHealthAssistant());

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      // Add user message immediately to UI
      const userMessage: ChatMessage = {
        type: 'user',
        content: message.trim(),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);

      // Get AI response
      const aiResponse = await assistantRef.current.sendMessage(message.trim());
      
      // Add AI response to UI
      setMessages(prev => [...prev, aiResponse]);
      
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMsg);
      
      // Add error message to chat
      const errorMessage: ChatMessage = {
        type: 'ai',
        content: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const clearMessages = useCallback(() => {
    assistantRef.current.clearHistory();
    setMessages([
      {
        type: 'ai',
        content: "Hello! I'm your AI Health Assistant powered by LLaMA 3.3. I can help answer questions about your health, medications, and provide the latest medical information from the internet. What would you like to know?",
        timestamp: new Date()
      }
    ]);
    setError(null);
  }, []);

  return {
    messages,
    sendMessage,
    isLoading,
    error,
    clearMessages
  };
};
