import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserInItemDetailsComponent } from './user-in-item-details/user-in-item-details.component';
import { MessagesComponent } from './messages/messages.component';
import { ActiveConversationComponent } from './active-conversation/active-conversation.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserInItemDetailsComponent,
    MessagesComponent,
    ActiveConversationComponent,
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
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
