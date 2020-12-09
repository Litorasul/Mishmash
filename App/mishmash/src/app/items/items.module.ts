import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { SlideshowModule } from 'ng-simple-slideshow';

import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryItemComponent } from './category-item/category-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemsPerCategoryPageComponent } from './items-per-category-page/items-per-category-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { from } from 'rxjs';
import { UserModule } from '../user/user.module';


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
    FormsModule,
    UserModule,
    SlideshowModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: 'daal2scr5'} as CloudinaryConfiguration)
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
