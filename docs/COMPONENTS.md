# Components Reference

## Custom Components (`src/components/`)

### ChatArea
**File:** `ChatArea.tsx`

Main chat display area that renders messages and handles auto-scrolling.

**Props:**
- `messages: Message[]` - Array of chat messages
- `isLoading: boolean` - Shows typing indicator when true

**Behavior:**
- Auto-scrolls to bottom when messages change
- Shows `EmptyState` when no messages exist
- Renders `MessageBubble` for each message
- Shows `TypingIndicator` during loading

---

### MessageBubble
**File:** `MessageBubble.tsx`

Individual chat message with role-based styling.

**Props:**
- `message: Message` - Message object to render

**Features:**
- Different styling for user (right-aligned, primary color) vs assistant (left-aligned, muted)
- Mood pill display for AI messages (e.g., "🤗 offering support")
- Basic markdown bold parsing (`**text**`)
- Timestamp display

---

### InputBar
**File:** `InputBar.tsx`

Bottom input area with voice/text toggle.

**Props:**
- `inputMode`, `setInputMode` - Voice/text mode switching
- `textInput`, `setTextInput` - Controlled text input
- `isRecording`, `setIsRecording` - Recording state
- `isLoading` - Disables input during loading
- `humorLevel` - Current humor setting
- `onSendText`, `onSendAudio` - Message handlers
- `onHumorClick` - Opens settings sidebar

**Contains:**
- Voice/text mode toggle button
- `VoiceButton` component
- Text input with send button
- Humor level indicator (emoji)
- `WaveformVisualizer` during recording

---

### VoiceButton
**File:** `VoiceButton.tsx`

Push-to-talk microphone button with visual feedback.

**Props:**
- `isRecording: boolean` - Current recording state
- `onRecordingStart`, `onRecordingEnd` - Recording callbacks
- `disabled?: boolean` - Disable interaction

**Features:**
- Pulsing ring animation during recording
- Scale transform on recording
- Supports both mouse and touch events

---

### WaveformVisualizer
**File:** `WaveformVisualizer.tsx`

Animated bars indicating active recording.

**Props:**
- `isActive: boolean` - Show/hide visualizer

**Visual:** 5 vertical bars with staggered waveform animation.

---

### Header
**File:** `Header.tsx`

Fixed top navigation bar.

**Props:**
- `onSettingsClick: () => void` - Settings button handler

**Contains:**
- Brain emoji logo + "MindPal" title
- Settings gear button
- User avatar placeholder

---

### SettingsSidebar
**File:** `SettingsSidebar.tsx`

Slide-in settings panel from right side.

**Props:**
- `isOpen`, `onClose` - Visibility control
- `settings`, `onSettingsChange` - Settings state
- `sessionId` - Display session ID
- `onClearSession` - Reset handler
- `onCrisisClick` - Crisis modal opener

**Sections:**
1. Humor Level (`HumorSlider`)
2. Voice settings (style, auto-play)
3. Appearance (dark mode - disabled toggle)
4. Session (export, new session)
5. About (version, crisis resources link)

---

### HumorSlider
**File:** `HumorSlider.tsx`

0-10 slider for adjusting AI response humor level.

**Props:**
- `value: number` - Current level (0-10)
- `onChange: (value: number) => void` - Change handler

**Visual:**
- Slider with three labels: Gentle, Witty, Spicy
- Preview text describing current setting
- Large number display

---

### CrisisModal
**File:** `CrisisModal.tsx`

Emergency mental health resources modal.

**Props:**
- `isOpen: boolean` - Visibility
- `onClose: () => void` - Close handler

**Resources:**
- 988 Suicide & Crisis Lifeline
- Crisis Text Line (741741)
- IASP International Resources

**Features:**
- Click-to-copy phone numbers
- External link support
- Copy confirmation feedback

---

### EmptyState
**File:** `EmptyState.tsx`

Welcome screen shown when chat is empty.

**Content:** Brain emoji, greeting, and voice input instructions.

---

### TypingIndicator
**File:** `TypingIndicator.tsx`

Three bouncing dots with "MindPal is thinking..." text.

---

### NavLink
**File:** `NavLink.tsx`

Wrapper around React Router's `NavLink` with className support.

**Props:**
- `className`, `activeClassName`, `pendingClassName` - State-based styling

---

## UI Components (`src/components/ui/`)

Standard shadcn/ui components. See [shadcn/ui docs](https://ui.shadcn.com) for usage.

**Used in this project:**
- `Button` - Primary actions
- `Input` - Text input
- `Slider` - Humor level control
- `Switch` - Toggle settings
- `Select` - Voice style dropdown
- `Separator` - Section dividers
- `Tooltip` - Info tooltips
- `Toast/Toaster/Sonner` - Notifications
