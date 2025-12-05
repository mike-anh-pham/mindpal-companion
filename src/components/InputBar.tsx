import { Button } from "@/components/ui/button";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useCallback, useEffect } from "react";
import { VoiceButton } from "./VoiceButton";
import { WaveformVisualizer } from "./WaveformVisualizer";

interface InputBarProps {
  isRecording: boolean;
  setIsRecording: (recording: boolean) => void;
  isLoading: boolean;
  humorLevel: number;
  onSendText: (text: string) => void;
  onHumorClick: () => void;
}

const getHumorEmoji = (level: number) => {
  if (level <= 3) return "😊";
  if (level <= 6) return "😏";
  return "😈";
};

export const InputBar = ({
  isRecording,
  setIsRecording,
  isLoading,
  humorLevel,
  onSendText,
  onHumorClick,
}: InputBarProps) => {
  // Handle final transcript - this is called when speech recognition ends
  const handleFinalTranscript = useCallback(
    (finalText: string) => {
      console.log("Got final transcript:", finalText);
      // Auto-send to Claude
      onSendText(finalText);
    },
    [onSendText]
  );

  const {
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    startListening,
    stopListening,
  } = useSpeechRecognition({
    onFinalTranscript: handleFinalTranscript,
  });

  // Sync listening state with isRecording
  useEffect(() => {
    setIsRecording(isListening);
  }, [isListening, setIsRecording]);

  const handleRecordingStart = useCallback(() => {
    if (!isSupported) {
      alert(
        "Speech recognition is not supported in this browser. Please use Chrome or Edge."
      );
      return;
    }
    if (!isListening && !isLoading) {
      startListening();
    }
  }, [isSupported, isListening, isLoading, startListening]);

  const handleRecordingEnd = useCallback(() => {
    if (isListening) {
      stopListening();
    }
    // The onFinalTranscript callback will handle sending the message
  }, [isListening, stopListening]);

  // Spacebar hold-to-talk
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger on spacebar, and not when repeating (held down)
      if (e.code === "Space" && !e.repeat) {
        e.preventDefault();
        handleRecordingStart();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleRecordingEnd();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleRecordingStart, handleRecordingEnd]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[100px] z-50 bg-glass backdrop-blur-xl border-t border-glass-border">
      <div className="relative flex flex-col items-center justify-center h-full px-4 max-w-3xl mx-auto">
        {/* Live transcript - positioned above the footer */}
        {isRecording && (transcript || interimTranscript) && (
          <div className="absolute bottom-full left-0 right-0 mb-2 px-4 animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground italic text-center bg-glass/80 backdrop-blur-sm rounded-lg px-4 py-2">
                "{transcript}
                {interimTranscript}"
              </p>
            </div>
          </div>
        )}

        {/* Main controls */}
        <div className="flex items-center gap-4">
          {/* Recording indicator */}
          {isRecording && (
            <div className="flex items-center gap-2 absolute left-4">
              <span className="text-destructive text-sm font-medium">🎤</span>
              <WaveformVisualizer isActive={isRecording} />
            </div>
          )}
          {/* Voice button */}
          <VoiceButton
            isRecording={isRecording}
            onRecordingStart={handleRecordingStart}
            onRecordingEnd={handleRecordingEnd}
            disabled={isLoading}
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
