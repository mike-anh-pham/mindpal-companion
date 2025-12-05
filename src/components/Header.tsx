import { Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header = ({ onSettingsClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] z-50 bg-glass backdrop-blur-xl border-b border-glass-border">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="MindPal logo">🧠</span>
          <h1 className="text-lg font-semibold text-foreground">MindPal</h1>
        </div>

        {/* Right: Settings and Avatar */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            aria-label="Open settings"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </Button>
          
          <div 
            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            aria-label="User avatar"
          >
            <User className="w-4 h-4 text-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};
