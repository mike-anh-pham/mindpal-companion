import { cn } from '@/lib/utils';

interface WaveformVisualizerProps {
  isActive: boolean;
}

export const WaveformVisualizer = ({ isActive }: WaveformVisualizerProps) => {
  if (!isActive) return null;

  return (
    <div className="flex items-center gap-0.5 h-6">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-destructive rounded-full animate-waveform",
          )}
          style={{ 
            animationDelay: `${i * 0.1}s`,
            height: '8px'
          }}
        />
      ))}
    </div>
  );
};
