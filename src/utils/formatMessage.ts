export const formatAIMessage = (content: string): string => {
  return content
    // Convert **bold** to <strong>
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Convert * list items to bullet points
    .replace(/^\*\s+(.+)$/gm, '• $1')
    // Convert line breaks
    .replace(/\n/g, '<br />')
    // Clean up extra spaces
    .replace(/\s+/g, ' ')
    .trim();
};
