export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <span className="text-5xl mb-4" role="img" aria-label="Brain">🧠</span>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Hey there 👋</h2>
      <p className="text-muted-foreground max-w-md">
        I'm MindPal, your mental health co-pilot. Hold the mic button and tell me what's on your mind.
      </p>
    </div>
  );
};
