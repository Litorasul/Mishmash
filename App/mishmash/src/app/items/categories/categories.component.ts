import { Component, OnInit } from '@angular/core';

import { ICategory } from 'src/app/shared/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: ICategory[] = [];
  isLoading = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.itemsService.getCategories().subscribe(categoriesList => {
      this.categoriesList = categoriesList;
      this.isLoading = false;
    });
  }

}
