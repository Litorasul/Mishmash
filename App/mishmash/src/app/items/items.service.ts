import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICategory, IItemInList } from '../shared/interfaces'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const baseUrl = environment.apiBaseUrl;
const categoriesUrl = environment.apiCategoties;
const itemsPerCategoryUrl = environment.apiItemsPerCategory;

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${baseUrl}${categoriesUrl}`);
  }

  getItemsPerCategory(id: string): Observable<IItemInList[]> {
    return this.http.get<IItemInList[]>(`${baseUrl}${itemsPerCategoryUrl}'${id}'`);
  }
}
