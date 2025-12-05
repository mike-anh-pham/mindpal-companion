import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header = ({ onSettingsClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] z-50 bg-glass backdrop-blur-xl border-b border-glass-border">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm border border-primary/20">
            <Logo className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">MindPal</h1>
        </div>

        {/* Right: Settings */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onSettingsClick}
          aria-label="Open settings"
          className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
