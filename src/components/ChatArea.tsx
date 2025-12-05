import { useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { EmptyState } from './EmptyState';

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
}

export const ChatArea = ({ messages, isLoading }: ChatAreaProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return (
      <main className="flex-1 mt-[60px] mb-[100px] gradient-bg overflow-hidden">
        <EmptyState />
      </main>
    );
  }

  return (
    <main className="flex-1 mt-[60px] mb-[100px] gradient-bg overflow-y-auto">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 space-y-6">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isLoading && <TypingIndicator />}
        
        <div ref={bottomRef} />
      </div>
    </main>
  );
};
