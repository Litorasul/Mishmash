import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IConversation, IConversationToCreate, IMessage, IUserConversations, IUserInItemDetails, IUserInProfile } from '../shared/interfaces';

const baseUrl = environment.apiBaseUrl;
const userDataUrl = environment.apiUsersData;
const loadReviews = environment.apiLoadReviews;
const loadConversations = environment.apiLoadConversationWithMessages;
const conversationDataUrl = environment.apiConversationsData;
const whereOwnerId = environment.apiWhereOwnerId;
const loadMessages = environment.apiLoadMessages;
const addMessageUrl = environment.apiAddMessage;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
    ) { }

    getUserInItemDetails(id: string): Observable<IUserInItemDetails> {
      return this.http.get<IUserInItemDetails>(`${baseUrl}${userDataUrl}${id}${loadReviews}`);
    }

    getUserInProfile(id: string): Observable<IUserInProfile> {
      return this.http.get<IUserInProfile>(`${baseUrl}${userDataUrl}${id}${loadReviews}`);
    }

    getReceivedConversationsForUser(id: string): Observable<IUserConversations> {
      return this.http.get<IUserConversations>(`${baseUrl}${userDataUrl}${id}${loadConversations}`);
    }

    getStartedConversationsForUser(id: string): Observable<IConversation[]> {
      return this.http.get<IConversation[]>(`${baseUrl}${conversationDataUrl}${whereOwnerId}'${id}'${loadMessages}`);
    }
    postMessage(body: any): Observable<IMessage> {
      return this.http.post<IMessage>(`${baseUrl}${addMessageUrl}`, body, httpOptions);
    }

    postMessageInConversationRelation(messageId: string[], convId: string): Observable<any> {
      return this.http.put<any>(`${baseUrl}${conversationDataUrl}/${convId}/messages`, messageId, httpOptions);
    }

    createConversation(conv: IConversationToCreate, receiverId: string): IConversation {
      let result!: IConversation;
      this.http.post<IConversation>(`${baseUrl}${conversationDataUrl}`, conv, httpOptions).subscribe(
        {
          next: (data: IConversation) => {
            result = data;
            this.http.put<any>(`${baseUrl}${userDataUrl}${receiverId}/conversations`, [data.objectId], httpOptions).subscribe();
          },
          error: (err) => {
            window.alert(err.error.message);
          }
        }
      );
      return result;
    }
}
