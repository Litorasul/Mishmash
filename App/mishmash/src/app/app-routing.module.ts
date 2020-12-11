import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import { DetailsComponent } from './items/details/details.component';
import { ItemsPerCategoryPageComponent } from './items/items-per-category-page/items-per-category-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories/:id',
    component: ItemsPerCategoryPageComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'sell',
    component: AddItemComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
