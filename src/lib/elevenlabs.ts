const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1/text-to-speech';

// Default voice - you can change this to any ElevenLabs voice ID
const DEFAULT_VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // "Sarah" - warm, conversational

interface SpeakOptions {
  voiceId?: string;
  modelId?: string;
  stability?: number;
  similarityBoost?: number;
}

export const speakText = async (
  text: string,
  options: SpeakOptions = {}
): Promise<void> => {
  const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;

  if (!apiKey) {
    console.warn('ElevenLabs API key not configured. Skipping text-to-speech.');
    return;
  }

  const {
    voiceId = DEFAULT_VOICE_ID,
    modelId = 'eleven_turbo_v2_5',
    stability = 0.5,
    similarityBoost = 0.75,
  } = options;

  try {
    const response = await fetch(`${ELEVENLABS_API_URL}/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability,
          similarity_boost: similarityBoost,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.detail?.message || `ElevenLabs API error: ${response.status}`);
    }

    // Get audio as blob and play it
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    // Clean up the object URL after playback
    audio.onended = () => {
      URL.revokeObjectURL(audioUrl);
    };

    audio.onerror = () => {
      URL.revokeObjectURL(audioUrl);
      console.error('Error playing audio');
    };

    await audio.play();
  } catch (error) {
    console.error('ElevenLabs TTS error:', error);
    // Don't throw - we don't want TTS failures to break the chat
  }
};
