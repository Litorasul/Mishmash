import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IItemInList } from 'src/app/shared/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-per-category-page',
  templateUrl: './items-per-category-page.component.html',
  styleUrls: ['./items-per-category-page.component.css']
})
export class ItemsPerCategoryPageComponent implements OnInit {

  itemsList: IItemInList[] = [];
  id!: string;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.itemsService.getItemsPerCategory(this.id).subscribe(itemsList => {
      this.itemsList = itemsList;
    });
  }

}
