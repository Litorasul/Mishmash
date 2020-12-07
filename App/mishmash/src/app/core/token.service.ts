import { Injectable } from '@angular/core';

import { IUser } from '../shared/interfaces';

const TOKEN_KEY = 'user-token';
const USER_KEY = 'user-key';

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
}
