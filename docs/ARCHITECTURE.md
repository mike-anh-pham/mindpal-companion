# Architecture

## Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        App.tsx                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │              Provider Layer                       │   │
│  │  QueryClientProvider → TooltipProvider → Router  │   │
│  │                    ↓                              │   │
│  │              Toaster Components                   │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    Index Page                            │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │              useChatState Hook                     │  │
│  │   (Central state: messages, settings, modals)     │  │
│  └──────────────────────────────────────────────────┘  │
│                          ↓                               │
│  ┌─────────┐  ┌──────────┐  ┌───────────────────────┐  │
│  │ Header  │  │ ChatArea │  │ SettingsSidebar       │  │
│  │         │  │          │  │   └─ HumorSlider      │  │
│  └─────────┘  │ Messages │  └───────────────────────┘  │
│               │   ↓      │                              │
│               │ Message  │  ┌───────────────────────┐  │
│               │ Bubble   │  │ CrisisModal           │  │
│               │   ↓      │  │ (Crisis resources)    │  │
│               │ Typing   │  └───────────────────────┘  │
│               │ Indicator│                              │
│               └──────────┘                              │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │                   InputBar                         │  │
│  │   VoiceButton ←→ WaveformVisualizer               │  │
│  │   Text Input ←→ Send Button                       │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## State Management

### useChatState Hook (`src/hooks/useChatState.ts`)

Central state management hook that contains:

| State | Type | Purpose |
|-------|------|---------|
| `messages` | `Message[]` | Chat message history |
| `isRecording` | `boolean` | Voice recording status |
| `isLoading` | `boolean` | AI response pending |
| `sidebarOpen` | `boolean` | Settings panel visibility |
| `inputMode` | `'voice' \| 'text'` | Current input method |
| `textInput` | `string` | Text input field value |
| `crisisModalOpen` | `boolean` | Crisis modal visibility |
| `sessionId` | `string` | Unique session identifier |
| `settings` | `Settings` | User preferences |

### Actions

- `addMessage(role, content, mood?)` - Add new message to chat
- `sendTextMessage(text)` - Process and send text message
- `sendAudioMessage(blob)` - Process and send audio message
- `updateSettings(partial)` - Update user settings
- `clearSession()` - Reset chat history

## Data Flow

### Message Flow
```
User Input → InputBar → useChatState.sendTextMessage/sendAudioMessage
                              ↓
                        Add user message
                              ↓
                        Set isLoading = true
                              ↓
                        [Simulated AI Response]
                              ↓
                        Add AI message with mood
                              ↓
                        Set isLoading = false
```

### Voice Recording Flow
```
VoiceButton (mousedown/touchstart)
        ↓
InputBar.handleRecordingStart()
        ↓
navigator.mediaDevices.getUserMedia()
        ↓
MediaRecorder.start()
        ↓
[Recording...]
        ↓
VoiceButton (mouseup/touchend)
        ↓
MediaRecorder.stop() → ondataavailable → Blob
        ↓
useChatState.sendAudioMessage(blob)
```

## Type Definitions

### Message (`src/types/chat.ts`)
```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  mood?: string;  // e.g., "🤗 offering support"
}
```

### Settings
```typescript
interface Settings {
  humorLevel: number;      // 0-10 scale
  voice: string;           // 'Default' | 'Warm' | 'Calm'
  autoPlayResponses: boolean;
}
```

## Routing

Simple two-route setup:
- `/` → `Index` page (main chat)
- `*` → `NotFound` page (404)
