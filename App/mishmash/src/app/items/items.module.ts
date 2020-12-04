import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryItemComponent } from './category-item/category-item.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent,
    CategoryItemComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    CategoriesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent
  ]
})
export class ItemsModule { }
