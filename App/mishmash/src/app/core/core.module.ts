import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from '../user/user.module';
import { ItemsModule } from '../items/items.module';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, NotFoundComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    ItemsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
