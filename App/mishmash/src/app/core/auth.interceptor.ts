import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { TokenService } from './token.service';

const TOKEN_HEADER_KEY = 'user-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    baseUrl = environment.apiBaseUrl;

    constructor(
        private tokenService: TokenService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.tokenService.getToken();
        if (req.url.includes(this.baseUrl) && token != null){
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, token)
            });
        }
        return next.handle(authReq);
    }

}

export const authInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
