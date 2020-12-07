import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ItemsService } from './items/items.service';
import { AuthService } from './core/auth.service';
import { UserService } from './user/user.service';
import { TokenService } from './core/token.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ItemsService,
    AuthService,
    TokenService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
