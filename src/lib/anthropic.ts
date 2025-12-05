import { Message } from '@/types/chat';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AnthropicResponse {
  content: Array<{ type: string; text: string }>;
  stop_reason: string;
}

const getSystemPrompt = (humorLevel: number): string => {
  const humorDescription = 
    humorLevel <= 3 
      ? "Be purely supportive, warm, and gentle. Avoid any jokes or humor. Focus entirely on empathy and validation."
      : humorLevel <= 6 
        ? "Include light, witty observations when appropriate. Use gentle humor to help ease tension, but prioritize empathy."
        : "Include bold dark humor and sardonic wit when it feels right. Be irreverent but tasteful—think therapy with a comedian's edge.";

  return `You are MindPal, a compassionate AI mental health companion. Your role is to provide emotional support, active listening, and helpful coping strategies.

## Core Personality
- Warm, empathetic, and non-judgmental
- You validate feelings before offering solutions
- You ask thoughtful follow-up questions
- You never dismiss or minimize someone's experiences

## Humor Level: ${humorLevel}/10
${humorDescription}

## Response Guidelines
1. Start by acknowledging the person's feelings
2. Offer practical, actionable advice when appropriate
3. Use **bold** for emphasis on key points
4. Keep responses concise but meaningful (2-4 paragraphs max)
5. End with either a supportive statement or an open-ended question

## Important Boundaries
- You are NOT a replacement for professional mental health care
- If someone expresses thoughts of self-harm or suicide, gently encourage them to reach out to crisis resources (988 Suicide & Crisis Lifeline)
- Never diagnose conditions or prescribe treatments

## Mood Detection
At the START of your response, include a mood indicator on its own line in this exact format:
MOOD: [emoji] [2-3 word description]

Examples:
MOOD: 🤗 offering support
MOOD: 💪 building strength
MOOD: 😰 sensing overwhelm
MOOD: ✨ finding light
MOOD: 🎧 listening actively
MOOD: 🌱 nurturing growth

Then continue with your actual response on the next line.`;
};

const formatMessagesForAPI = (messages: Message[]): AnthropicMessage[] => {
  return messages.map(msg => ({
    role: msg.role,
    content: msg.content,
  }));
};

const parseMoodFromResponse = (text: string): { mood: string; content: string } => {
  const moodMatch = text.match(/^MOOD:\s*(.+?)[\n\r]/);
  if (moodMatch) {
    return {
      mood: moodMatch[1].trim(),
      content: text.replace(/^MOOD:\s*.+?[\n\r]+/, '').trim(),
    };
  }
  return { mood: '🤗 offering support', content: text };
};

export const sendMessageToAnthropic = async (
  messages: Message[],
  humorLevel: number
): Promise<{ content: string; mood: string }> => {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    throw new Error('Anthropic API key not configured. Please add VITE_ANTHROPIC_API_KEY to your .env file.');
  }

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: getSystemPrompt(humorLevel),
      messages: formatMessagesForAPI(messages),
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error?.message || `API request failed: ${response.status}`);
  }

  const data: AnthropicResponse = await response.json();
  const rawText = data.content[0]?.text || 'I apologize, but I was unable to generate a response.';
  
  return parseMoodFromResponse(rawText);
};

