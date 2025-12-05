import { Slider } from '@/components/ui/slider';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface HumorSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const getPreviewText = (level: number) => {
  if (level <= 3) return "Responses will be purely supportive and warm";
  if (level <= 6) return "Responses will include light, witty observations";
  return "Responses will include bold dark humor (tastefully)";
};

export const HumorSlider = ({ value, onChange }: HumorSliderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-foreground">Humor Level</label>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 text-muted-foreground cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Adjust how much dark humor MindPal adds to responses</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={0}
        max={10}
        step={1}
        className="w-full"
      />

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>😊 Gentle</span>
        <span>😏 Witty</span>
        <span>😈 Spicy</span>
      </div>

      <div className="text-center">
        <span className="text-3xl font-bold text-foreground">{value}</span>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        {getPreviewText(value)}
      </p>
    </div>
  );
};
