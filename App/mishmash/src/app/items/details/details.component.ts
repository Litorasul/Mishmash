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
  images!: string[];
  isLoading = false;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.itemsService.getItemDetails(this.id).subscribe(item => {
      this.images = item.pictures.map(p => p.url);
      this.item = item;
      this.isLoading = false;
    });
  }

}
