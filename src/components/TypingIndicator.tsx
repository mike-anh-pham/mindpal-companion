export const TypingIndicator = () => {
  return (
    <div className="flex items-start animate-slide-up">
      <div className="bg-message-ai border border-glass-border rounded-[20px_20px_20px_4px] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce-dot animate-bounce-dot-1" />
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce-dot animate-bounce-dot-2" />
            <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce-dot animate-bounce-dot-3" />
          </div>
          <span className="text-sm text-muted-foreground">MindPal is thinking...</span>
        </div>
      </div>
    </div>
  );
};
