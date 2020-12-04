import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICategory } from '../shared/interfaces'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const baseUrl = environment.apiBaseUrl;
const categories = environment.apiCategoties;

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${baseUrl}${categories}`);
  }
}
