import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUserInItemDetails } from '../shared/interfaces';

const baseUrl = environment.apiBaseUrl;
const userDataUrl = environment.apiUsersData;
const loadReviews = environment.apiLoadReviews;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
    ) { }

    getUserInItemDetails(id: string): Observable<IUserInItemDetails> {
      return this.http.get<IUserInItemDetails>(`${baseUrl}${userDataUrl}${id}${loadReviews}`);
    }
}
