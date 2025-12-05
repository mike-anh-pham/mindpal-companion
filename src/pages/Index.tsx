import { Header } from '@/components/Header';
import { ChatArea } from '@/components/ChatArea';
import { InputBar } from '@/components/InputBar';
import { SettingsSidebar } from '@/components/SettingsSidebar';
import { CrisisModal } from '@/components/CrisisModal';
import { useChatState } from '@/hooks/useChatState';

const Index = () => {
  const {
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
  } = useChatState();

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header onSettingsClick={() => setSidebarOpen(true)} />

      <ChatArea messages={messages} isLoading={isLoading} />

      <InputBar
        inputMode={inputMode}
        setInputMode={setInputMode}
        textInput={textInput}
        setTextInput={setTextInput}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        isLoading={isLoading}
        humorLevel={settings.humorLevel}
        onSendText={sendTextMessage}
        onSendAudio={sendAudioMessage}
        onHumorClick={() => setSidebarOpen(true)}
      />

      <SettingsSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        settings={settings}
        onSettingsChange={updateSettings}
        sessionId={sessionId}
        onClearSession={clearSession}
        onCrisisClick={() => {
          setSidebarOpen(false);
          setCrisisModalOpen(true);
        }}
      />

      <CrisisModal
        isOpen={crisisModalOpen}
        onClose={() => setCrisisModalOpen(false)}
      />
    </div>
  );
};

export default Index;
