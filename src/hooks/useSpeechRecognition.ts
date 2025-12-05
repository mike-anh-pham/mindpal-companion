import { useCallback, useEffect, useRef, useState } from "react";

// Check for browser support
const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || (window as any).webkitSpeechRecognition
    : null;

interface UseSpeechRecognitionOptions {
  onFinalTranscript?: (transcript: string) => void;
}

export const useSpeechRecognition = (
  options: UseSpeechRecognitionOptions = {}
) => {
  const { onFinalTranscript } = options;

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef<string>("");
  const onFinalTranscriptRef = useRef(onFinalTranscript);
  const isSupported = !!SpeechRecognitionAPI;

  // Keep callback ref updated
  useEffect(() => {
    onFinalTranscriptRef.current = onFinalTranscript;
  }, [onFinalTranscript]);

  // Initialize recognition once
  useEffect(() => {
    if (!SpeechRecognitionAPI) {
      console.warn("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Speech recognition started");
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let interim = "";
      let final = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const text = result[0].transcript;
        if (result.isFinal) {
          final += text;
        } else {
          interim += text;
        }
      }

      console.log("Final:", final, "Interim:", interim);

      if (final) {
        transcriptRef.current += final;
        setTranscript(transcriptRef.current);
      }
      setInterimTranscript(interim);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error, event);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log(
        "Speech recognition ended, final transcript:",
        transcriptRef.current
      );
      setIsListening(false);
      // Call the callback with the final transcript
      if (transcriptRef.current.trim() && onFinalTranscriptRef.current) {
        onFinalTranscriptRef.current(transcriptRef.current.trim());
      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.abort();
    };
  }, []);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      console.error("Recognition not initialized");
      return;
    }

    console.log("Starting speech recognition...");
    transcriptRef.current = "";
    setTranscript("");
    setInterimTranscript("");

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error("Failed to start speech recognition:", error);
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      console.log("Stopping speech recognition...");
      recognitionRef.current.stop();
    }
  }, []);

  return {
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    startListening,
    stopListening,
  };
};
