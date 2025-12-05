import { useState, useRef } from 'react';
import { Keyboard, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VoiceButton } from './VoiceButton';
import { WaveformVisualizer } from './WaveformVisualizer';
import { InputMode } from '@/types/chat';
import { cn } from '@/lib/utils';

interface InputBarProps {
  inputMode: InputMode;
  setInputMode: (mode: InputMode) => void;
  textInput: string;
  setTextInput: (text: string) => void;
  isRecording: boolean;
  setIsRecording: (recording: boolean) => void;
  isLoading: boolean;
  humorLevel: number;
  onSendText: (text: string) => void;
  onSendAudio: (blob: Blob) => void;
  onHumorClick: () => void;
}

const getHumorEmoji = (level: number) => {
  if (level <= 3) return '😊';
  if (level <= 6) return '😏';
  return '😈';
};

export const InputBar = ({
  inputMode,
  setInputMode,
  textInput,
  setTextInput,
  isRecording,
  setIsRecording,
  isLoading,
  humorLevel,
  onSendText,
  onSendAudio,
  onHumorClick,
}: InputBarProps) => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleRecordingStart = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        onSendAudio(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleRecordingEnd = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmitText = () => {
    if (textInput.trim()) {
      onSendText(textInput);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitText();
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[100px] z-50 bg-glass backdrop-blur-xl border-t border-glass-border">
      <div className="flex flex-col items-center justify-center h-full px-4 max-w-3xl mx-auto">
        {/* Recording indicator */}
        {isRecording && (
          <div className="flex items-center gap-2 mb-2 animate-fade-in">
            <span className="text-destructive text-sm font-medium">🎤 Listening...</span>
            <WaveformVisualizer isActive={isRecording} />
          </div>
        )}

        {/* Text input mode */}
        {inputMode === 'text' && (
          <div className="flex items-center gap-2 w-full mb-2 animate-slide-up">
            <Input
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your thoughts..."
              className="flex-1 h-12 bg-muted/50 border-glass-border rounded-full px-5 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
              disabled={isLoading}
            />
            <Button
              onClick={handleSubmitText}
              disabled={!textInput.trim() || isLoading}
              className="h-12 w-12 rounded-full bg-primary hover:brightness-110"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Main controls */}
        <div className="flex items-center gap-4">
          {/* Keyboard toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setInputMode(inputMode === 'voice' ? 'text' : 'voice')}
            className={cn(
              "w-10 h-10 rounded-full bg-muted/50 hover:bg-muted transition-colors",
              inputMode === 'text' && "bg-primary/20 text-primary"
            )}
            aria-label="Toggle text input"
          >
            <Keyboard className="w-5 h-5" />
          </Button>

          {/* Voice button */}
          <VoiceButton
            isRecording={isRecording}
            onRecordingStart={handleRecordingStart}
            onRecordingEnd={handleRecordingEnd}
            disabled={isLoading || inputMode === 'text'}
          />

          {/* Humor level indicator */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onHumorClick}
            className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted transition-colors text-lg"
            aria-label={`Humor level: ${humorLevel}. Click to adjust.`}
          >
            {getHumorEmoji(humorLevel)}
          </Button>
        </div>
      </div>
    </footer>
  );
};
