import { ChatArea } from "@/components/ChatArea";
import { CrisisModal } from "@/components/CrisisModal";
import { Header } from "@/components/Header";
import { InputBar } from "@/components/InputBar";
import { SettingsSidebar } from "@/components/SettingsSidebar";
import { useChatState } from "@/hooks/useChatState";

const Index = () => {
  const {
    messages,
    isRecording,
    setIsRecording,
    isLoading,
    sidebarOpen,
    setSidebarOpen,
    crisisModalOpen,
    setCrisisModalOpen,
    sessionId,
    settings,
    updateSettings,
    sendTextMessage,
    clearSession,
  } = useChatState();

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header onSettingsClick={() => setSidebarOpen(true)} />

      <ChatArea messages={messages} isLoading={isLoading} />

      <InputBar
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        isLoading={isLoading}
        humorLevel={settings.humorLevel}
        onSendText={sendTextMessage}
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
