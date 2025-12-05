import { sendMessageToAnthropic } from "@/lib/anthropic";
import { InputMode, Message, Settings } from "@/types/chat";
import { useCallback, useState } from "react";

const generateId = () => Math.random().toString(36).substr(2, 9);

const initialMessages: Message[] = [
  {
    id: generateId(),
    role: "user",
    content:
      "I have three deadlines tomorrow and my boss keeps adding more tasks",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: generateId(),
    role: "assistant",
    content: `That sounds genuinely exhausting—being pulled in multiple directions while the pile keeps growing is one of the most draining experiences. Here's what might help:

1. **Pick ONE thing**: What's the single highest-impact task? Start there.
2. **Time-box ruthlessly**: 25 minutes of focused work, then reassess.
3. **Draft a boundary**: "I want to help with this, but I'm at capacity until [deadline]. Can we revisit Thursday?"

And hey, look at the bright side—at least when the robots take over, they'll eliminate middle management entirely. Your future AI overlord won't even know what a "quick ask" is. 😈`,
    timestamp: new Date(),
    mood: "😰 sensing overwhelm",
  },
];

export const useChatState = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputMode, setInputMode] = useState<InputMode>("voice");
  const [textInput, setTextInput] = useState("");
  const [crisisModalOpen, setCrisisModalOpen] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [settings, setSettings] = useState<Settings>({
    humorLevel: 5,
    voice: "Default",
    autoPlayResponses: true,
  });

  const addMessage = useCallback(
    (role: "user" | "assistant", content: string, mood?: string) => {
      const newMessage: Message = {
        id: generateId(),
        role,
        content,
        timestamp: new Date(),
        mood,
      };
      setMessages((prev) => [...prev, newMessage]);
    },
    []
  );

  const sendTextMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      const userMessage: Message = {
        id: generateId(),
        role: "user",
        content: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setTextInput("");
      setIsLoading(true);

      try {
        // Get all messages including the new user message for context
        const allMessages = [...messages, userMessage];
        const response = await sendMessageToAnthropic(allMessages);
        addMessage("assistant", response.content, response.mood);
      } catch (error) {
        console.error("Failed to get AI response:", error);
        const errorMessage =
          error instanceof Error ? error.message : "Failed to get response";
        addMessage(
          "assistant",
          `I'm sorry, I encountered an issue: ${errorMessage}. Please try again.`,
          "😔 experiencing difficulty"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [addMessage, messages]
  );

  const sendAudioMessage = useCallback(
    async (blob: Blob) => {
      // Placeholder for audio processing
      console.log("Audio blob received:", blob);
      setIsLoading(true);

      setTimeout(() => {
        addMessage("user", "[Voice message transcribed]");
        setTimeout(() => {
          addMessage(
            "assistant",
            "I heard that. Sometimes just speaking our thoughts out loud helps us process them. What you're feeling is valid. Would you like to explore that further?",
            "🎧 listening actively"
          );
          setIsLoading(false);
        }, 1000);
      }, 500);
    },
    [addMessage]
  );

  const updateSettings = useCallback((newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  const clearSession = useCallback(() => {
    setMessages([]);
  }, []);

  const connectWebSocket = useCallback(() => {
    console.log("WebSocket connection placeholder");
  }, []);

  return {
    messages,
    isRecording,
    setIsRecording,
    isLoading,
    sidebarOpen,
    setSidebarOpen,
    inputMode,
    setInputMode,
    textInput,
    setTextInput,
    crisisModalOpen,
    setCrisisModalOpen,
    sessionId,
    settings,
    updateSettings,
    sendTextMessage,
    sendAudioMessage,
    clearSession,
    connectWebSocket,
  };
};
