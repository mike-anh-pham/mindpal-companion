import { X, Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { HumorSlider } from './HumorSlider';
import { Settings } from '@/types/chat';
import { cn } from '@/lib/utils';

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSettingsChange: (settings: Partial<Settings>) => void;
  sessionId: string;
  onClearSession: () => void;
  onCrisisClick: () => void;
}

export const SettingsSidebar = ({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
  sessionId,
  onClearSession,
  onCrisisClick,
}: SettingsSidebarProps) => {
  const handleExport = () => {
    // Placeholder for export functionality
    console.log('Exporting conversation...');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-[320px] max-w-full z-50",
          "bg-glass backdrop-blur-xl border-l border-glass-border",
          "transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0 animate-slide-in-right" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-glass-border">
            <h2 className="text-lg font-semibold text-foreground">Settings</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close settings"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Section 1: Humor Level */}
            <section>
              <HumorSlider
                value={settings.humorLevel}
                onChange={(value) => onSettingsChange({ humorLevel: value })}
              />
            </section>

            <Separator className="bg-glass-border" />

            {/* Section 2: Voice Settings */}
            <section className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Voice</h3>
              
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Voice Style</label>
                <Select
                  value={settings.voice}
                  onValueChange={(value) => onSettingsChange({ voice: value })}
                >
                  <SelectTrigger className="bg-muted/50 border-glass-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Default">Default</SelectItem>
                    <SelectItem value="Warm">Warm</SelectItem>
                    <SelectItem value="Calm">Calm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Auto-play responses</label>
                <Switch
                  checked={settings.autoPlayResponses}
                  onCheckedChange={(checked) => onSettingsChange({ autoPlayResponses: checked })}
                />
              </div>
            </section>

            <Separator className="bg-glass-border" />

            {/* Section 3: Appearance */}
            <section className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Appearance</h3>
              
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Dark mode</label>
                <Switch checked={false} disabled />
              </div>
            </section>

            <Separator className="bg-glass-border" />

            {/* Section 4: Session */}
            <section className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Session</h3>
              
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10"
                onClick={handleExport}
              >
                <Download className="w-4 h-4 mr-2" />
                Export Conversation
              </Button>

              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-foreground"
                onClick={onClearSession}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                New Session
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Session ID: {sessionId.slice(0, 8)}...
              </p>
            </section>

            <Separator className="bg-glass-border" />

            {/* Section 5: About */}
            <section className="space-y-2">
              <p className="text-sm text-muted-foreground">MindPal v1.0</p>
              <button
                onClick={onCrisisClick}
                className="text-sm text-accent hover:underline font-medium"
              >
                Crisis Resources
              </button>
              <p className="text-sm text-muted-foreground">
                Built with 💜 at AI Hackathon
              </p>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
};
