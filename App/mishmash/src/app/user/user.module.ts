import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserInItemDetailsComponent } from './user-in-item-details/user-in-item-details.component';
import { MessagesComponent } from './messages/messages.component';
import { ActiveConversationComponent } from './active-conversation/active-conversation.component';
import { UserAllItemsComponent } from './user-all-items/user-all-items.component';
import { ItemsModule } from '../items/items.module';
import { SharedModule } from '../shared/shared.module';
import { AddReviewComponent } from './add-review/add-review.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserInItemDetailsComponent,
    MessagesComponent,
    ActiveConversationComponent,
    UserAllItemsComponent,
    AddReviewComponent,
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserInItemDetailsComponent,
  ]
})
export class UserModule { }
