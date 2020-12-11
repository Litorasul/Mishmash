import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListComponent,
    ListItemComponent
  ]
})
export class SharedModule { }
