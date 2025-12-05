import { Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceButtonProps {
  isRecording: boolean;
  onRecordingStart: () => void;
  onRecordingEnd: () => void;
  disabled?: boolean;
}

export const VoiceButton = ({ 
  isRecording, 
  onRecordingStart, 
  onRecordingEnd,
  disabled 
}: VoiceButtonProps) => {
  return (
    <div className="relative">
      {/* Pulsing rings when recording */}
      {isRecording && (
        <>
          <span className="absolute inset-0 rounded-full bg-destructive animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full bg-destructive animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
        </>
      )}
      
      <button
        className={cn(
          "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
          disabled && "opacity-50 cursor-not-allowed",
          isRecording 
            ? "bg-destructive focus:ring-destructive scale-110" 
            : "bg-primary hover:brightness-110 active:scale-95 focus:ring-primary shadow-[0_4px_20px_hsl(var(--primary)/0.4)]"
        )}
        onMouseDown={!disabled ? onRecordingStart : undefined}
        onMouseUp={!disabled ? onRecordingEnd : undefined}
        onMouseLeave={isRecording ? onRecordingEnd : undefined}
        onTouchStart={!disabled ? onRecordingStart : undefined}
        onTouchEnd={!disabled ? onRecordingEnd : undefined}
        disabled={disabled}
        aria-label="Hold to record voice message"
      >
        <Mic className={cn(
          "w-6 h-6 text-foreground",
          isRecording && "animate-pulse"
        )} />
      </button>
    </div>
  );
};
