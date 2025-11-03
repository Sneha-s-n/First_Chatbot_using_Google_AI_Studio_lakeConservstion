
export enum MessageSender {
  USER = 'user',
  AI = 'ai',
}

export interface Message {
  text: string;
  sender: MessageSender;
  id: number;
  imageUrl?: string;
  originalText: string;
  mapUrl?: string;
  directionsUrl?: string;
}

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'kn', name: 'Kannada' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
] as const;

export type LanguageCode = typeof LANGUAGES[number]['code'];