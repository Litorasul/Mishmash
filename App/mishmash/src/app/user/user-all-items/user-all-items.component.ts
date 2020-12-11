import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from 'src/app/items/items.service';
import { IItemInList } from 'src/app/shared/interfaces';

const userKey = 'username';

@Component({
  selector: 'app-user-all-items',
  templateUrl: './user-all-items.component.html',
  styleUrls: ['./user-all-items.component.css']
})
export class UserAllItemsComponent implements OnInit {

  itemsList: IItemInList[] = [];
  id!: string;
  userName!: string;

  constructor(
    private itemService: ItemsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.userName = this.activatedRoute.snapshot.queryParams[userKey];
  }

  ngOnInit(): void {
    this.itemService.getItemsPerUser(this.id).subscribe(items => {
      this.itemsList = items;
    });
  }

}
