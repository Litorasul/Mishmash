import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItemDetails } from 'src/app/shared/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item!: IItemDetails;
  id!: string;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.itemsService.getItemDetails(this.id).subscribe(item => {
      this.item = item;
    })
  }

}
