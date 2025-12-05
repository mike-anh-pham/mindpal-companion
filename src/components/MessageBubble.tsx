import { Message } from '@/types/chat';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === 'user';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div 
      className={cn(
        "flex flex-col animate-slide-up",
        isUser ? "items-end" : "items-start"
      )}
    >
      {/* Mood indicator for AI messages */}
      {!isUser && message.mood && (
        <span className="px-3 py-1 mb-2 text-xs rounded-full bg-mood-pill text-mood-pill-text">
          {message.mood}
        </span>
      )}
      
      {/* Message bubble */}
      <div
        className={cn(
          "max-w-[70%] md:max-w-[70%] max-sm:max-w-[85%] px-4 py-3",
          isUser 
            ? "bg-primary text-primary-foreground rounded-[20px_20px_4px_20px]" 
            : "bg-message-ai border border-glass-border text-foreground rounded-[20px_20px_20px_4px]"
        )}
      >
        <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">
          {message.content.split('**').map((part, index) => 
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
          )}
        </p>
      </div>
      
      {/* Timestamp */}
      <span 
        className={cn(
          "text-xs text-muted-foreground mt-1",
          isUser ? "text-right" : "text-left"
        )}
      >
        {formatTime(message.timestamp)}
      </span>
    </div>
  );
};
