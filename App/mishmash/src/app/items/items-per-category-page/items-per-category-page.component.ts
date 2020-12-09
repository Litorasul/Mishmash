import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IItemInList } from 'src/app/shared/interfaces';
import { ItemsService } from '../items.service';

const categoryName = 'categoryName';

@Component({
  selector: 'app-items-per-category-page',
  templateUrl: './items-per-category-page.component.html',
  styleUrls: ['./items-per-category-page.component.css']
})
export class ItemsPerCategoryPageComponent implements OnInit {

  itemsList: IItemInList[] = [];
  id!: string;
  cartegoryName!: string;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.cartegoryName = this.activatedRoute.snapshot.queryParams[categoryName];
    }

  ngOnInit(): void {
    this.itemsService.getItemsPerCategory(this.id).subscribe(itemsList => {
      this.itemsList = itemsList;
    });
  }

}
