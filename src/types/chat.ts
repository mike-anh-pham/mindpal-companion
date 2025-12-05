export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  mood?: string;
}

export interface Settings {
  humorLevel: number;
  voice: string;
  autoPlayResponses: boolean;
}

export type InputMode = 'voice' | 'text';
