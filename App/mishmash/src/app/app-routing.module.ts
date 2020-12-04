import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
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
    component:ItemsPerCategoryPageComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
