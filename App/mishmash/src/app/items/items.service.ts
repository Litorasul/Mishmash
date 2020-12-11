import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICategory, IItemDetails, IItemForSale, IItemInList, IPicture, IPictureToAdd } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const baseUrl = environment.apiBaseUrl;
const categoriesUrl = environment.apiCategoties;
const itemsPerCategoryUrl = environment.apiItemsPerCategory;
const itemDetailsUrl = environment.apiItemDetails;
const loadPicturesUrl = environment.apiLoadPictures;
const itemForSaleUrl = environment.apiItemForSale;
const addPictureUrl = environment.apiAddPicture;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${baseUrl}${categoriesUrl}`);
  }

  getItemsPerCategory(id: string): Observable<IItemInList[]> {
    return this.http.get<IItemInList[]>(`${baseUrl}${itemsPerCategoryUrl}'${id}'&loadRelations=pictures`);
  }
  getItemDetails(id: string): Observable<IItemDetails> {
    return this.http.get<IItemDetails>(`${baseUrl}${itemDetailsUrl}${id}${loadPicturesUrl}`);
  }

  postItemForSale(item: IItemForSale): Observable<any> {
    return this.http.post(`${baseUrl}${itemForSaleUrl}`, item, httpOptions);
  }

  postPicture(picture: IPictureToAdd): Observable<IPicture> {
    return this.http.post<IPicture>(`${baseUrl}${addPictureUrl}`, picture, httpOptions);
  }

  postPicturesToItemRelation(pictureIds: string[], itemId: string): Observable<any> {
    return this.http.post(`${baseUrl}${itemDetailsUrl}${itemId}/pictures`, pictureIds, httpOptions);
  }

  postItemInCategoryRelation(categoryIds: string[], itemId: string): Observable<any> {
    return this.http.post(`${baseUrl}${itemDetailsUrl}${itemId}/category`, categoryIds, httpOptions);
  }
}
