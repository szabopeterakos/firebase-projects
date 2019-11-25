export interface Message {
  id: string;
  message: string;
}

export interface User {
  displayLanguage: string;
  displayName: string;
  guests: number;
  id: number;
  isAdmin: boolean;
  status: string;
}

export interface AppSetting {
  date: Date;
  eventStatus: string;
  eventTitle: string;
  minTreshold: number;
}
