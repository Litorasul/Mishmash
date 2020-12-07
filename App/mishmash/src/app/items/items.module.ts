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
import { ItemsPerCategoryPageComponent } from './items-per-category-page/items-per-category-page.component';
import { RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent,
    CategoryItemComponent,
    ListItemComponent,
    ItemsPerCategoryPageComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CategoriesComponent,
    DetailsComponent,
    ListComponent,
    SearchComponent,
    ItemsPerCategoryPageComponent,
    AddItemComponent
  ]
})
export class ItemsModule { }
