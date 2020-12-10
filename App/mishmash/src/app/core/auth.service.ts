import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TokenService } from './token.service';
import { environment } from '../../environments/environment';
import { ILoginCredentials, IRegisterCredentials, IUser } from '../shared/interfaces';


const baseUrl = environment.apiBaseUrl;
const loginUrl = environment.apiLogin;
const registerUrl = environment.apiRegister;
const logoutUrl = environment.apiLogout;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  authenticate(): boolean {
    return !!this.tokenService.getToken();
  }

  isOwner(id: string): boolean {
    const logedUser = this.tokenService.getUser();
    return logedUser?.objectId === id;
  }

  login(credentials: ILoginCredentials): Observable<any> {
    return this.http.post(`${baseUrl}${loginUrl}`, {
      login: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(credentials: IRegisterCredentials): Observable<any> {
    return this.http.post(`${baseUrl}${registerUrl}`, credentials, httpOptions);
  }

  logout(): Observable<any> {
    const token = this.tokenService.getToken();
    return this.http.get(`${baseUrl}${logoutUrl}`, {
      headers: new HttpHeaders({'user-token': token ? token : ''})
    });
  }
}
