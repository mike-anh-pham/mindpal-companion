# Custom Hooks Reference

## useChatState
**File:** `src/hooks/useChatState.ts`

Central state management hook for the chat application.

### Return Values

```typescript
{
  // State
  messages: Message[];           // Chat history
  isRecording: boolean;          // Voice recording active
  isLoading: boolean;            // Waiting for AI response
  sidebarOpen: boolean;          // Settings panel open
  inputMode: InputMode;          // 'voice' | 'text'
  textInput: string;             // Text input value
  crisisModalOpen: boolean;      // Crisis modal open
  sessionId: string;             // Unique session UUID
  settings: Settings;            // User preferences

  // Setters
  setIsRecording: (boolean) => void;
  setSidebarOpen: (boolean) => void;
  setInputMode: (InputMode) => void;
  setTextInput: (string) => void;
  setCrisisModalOpen: (boolean) => void;

  // Actions
  sendTextMessage: (text: string) => Promise<void>;
  sendAudioMessage: (blob: Blob) => Promise<void>;
  updateSettings: (Partial<Settings>) => void;
  clearSession: () => void;
  connectWebSocket: () => void;    // Placeholder
}
```

### Initial State

The hook initializes with sample messages demonstrating the AI's response style:
- User message about work stress
- AI response with structured advice and dark humor

### Implementation Notes

- Uses `crypto.randomUUID()` for session ID generation
- AI responses are currently simulated with `setTimeout`
- WebSocket connection is a placeholder for future backend integration

---

## useIsMobile
**File:** `src/hooks/use-mobile.tsx`

Responsive breakpoint detection hook.

### Usage
```typescript
const isMobile = useIsMobile();
// true if viewport width < 768px
```

### Implementation
- Uses `window.matchMedia` for breakpoint detection
- Listens for viewport changes
- Breakpoint: 768px (tablet/mobile threshold)

---

## useToast
**File:** `src/hooks/use-toast.ts`

Toast notification system with reducer-based state.

### Usage
```typescript
const { toast, dismiss, toasts } = useToast();

// Show toast
toast({
  title: "Success",
  description: "Your message was sent",
});

// Dismiss specific toast
dismiss(toastId);
```

### Configuration
- `TOAST_LIMIT: 1` - Maximum visible toasts
- `TOAST_REMOVE_DELAY: 1000000` - Time before removal (ms)

### Actions
- `ADD_TOAST` - Add new toast to queue
- `UPDATE_TOAST` - Modify existing toast
- `DISMISS_TOAST` - Mark toast as closing
- `REMOVE_TOAST` - Remove from DOM

### Architecture
Uses a global state pattern with listeners array for cross-component synchronization.
