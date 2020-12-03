import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent
  ]
})
export class ItemsModule { }
