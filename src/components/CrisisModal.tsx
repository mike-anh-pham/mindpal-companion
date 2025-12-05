import { X, Phone, MessageSquare, Globe, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CrisisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resources = [
  {
    name: "988 Suicide & Crisis Lifeline",
    contact: "Call or text 988",
    type: "phone",
    color: "bg-destructive",
    icon: Phone,
    copyText: "988",
  },
  {
    name: "Crisis Text Line",
    contact: "Text HOME to 741741",
    type: "text",
    color: "bg-secondary",
    icon: MessageSquare,
    copyText: "741741",
  },
  {
    name: "International Association for Suicide Prevention",
    contact: "iasp.info/resources/Crisis_Centres",
    type: "web",
    color: "bg-success",
    icon: Globe,
    link: "https://www.iasp.info/resources/Crisis_Centres/",
  },
];

export const CrisisModal = ({ isOpen, onClose }: CrisisModalProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleResourceClick = (resource: typeof resources[0], index: number) => {
    if (resource.link) {
      window.open(resource.link, '_blank');
    } else if (resource.copyText) {
      handleCopy(resource.copyText, index);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border-2 border-destructive rounded-2xl p-6 animate-slide-up">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            💙 You're Not Alone
          </h2>
          <p className="text-muted-foreground">
            If you're in crisis, please reach out to these resources:
          </p>
        </div>

        {/* Resources */}
        <div className="space-y-3 mb-6">
          {resources.map((resource, index) => (
            <button
              key={index}
              onClick={() => handleResourceClick(resource, index)}
              className={cn(
                "w-full flex items-center gap-3 p-4 rounded-xl",
                "bg-muted/50 hover:bg-muted transition-colors text-left",
                "focus:outline-none focus:ring-2 focus:ring-primary"
              )}
            >
              {/* Color indicator */}
              <div className={cn("w-1 h-12 rounded-full", resource.color)} />
              
              {/* Icon */}
              <div className="flex-shrink-0">
                <resource.icon className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">
                  {resource.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {resource.contact}
                </p>
              </div>

              {/* Copy/Link indicator */}
              <div className="flex-shrink-0">
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-success" />
                ) : resource.link ? (
                  <Globe className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Close action */}
        <Button
          onClick={onClose}
          className="w-full bg-muted hover:bg-muted/80 text-foreground"
        >
          I understand
        </Button>
      </div>
    </div>
  );
};
