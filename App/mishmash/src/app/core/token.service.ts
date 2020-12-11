import { Injectable } from '@angular/core';

import { IConversation, IUser } from '../shared/interfaces';

const TOKEN_KEY = 'user-token';
const USER_KEY = 'user-key';
const CONVERSATION_KEY = 'conversation-key';

@Injectable()
export class TokenService {

  constructor() { }

  clearStorage(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: IUser): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): IUser | null {
    const user = localStorage.getItem(USER_KEY);
    if (!user) {
      return null;
    }
    return JSON.parse(user) as IUser;
  }

  public saveConversation(conversation: IConversation): void {
    window.localStorage.removeItem(CONVERSATION_KEY);
    window.localStorage.setItem(CONVERSATION_KEY, JSON.stringify(conversation));
  }

  public getConversation(): IConversation | null {
    const conv = localStorage.getItem(CONVERSATION_KEY);
    if (conv) {
      window.localStorage.removeItem(CONVERSATION_KEY);
    }
    if (!conv) {
      return null;
    }
    return JSON.parse(conv) as IConversation;
  }
}
