import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
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
  isUserLogged = false;
  isOwner = false;

  constructor(
    private itemsService: ItemsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isUserLogged = this.authService.authenticate();
    this.itemsService.getItemDetails(this.id).subscribe(item => {
      this.images = item.pictures.map(p => p.url);
      this.item = item;
      this.isOwner = this.authService.isOwner(this.item.ownerId);
      this.isLoading = false;
    });
  }

  deleteEventhandler(): void {
    this.itemsService.deleteItem(this.item.objectId).subscribe(
      {
        next: (d: any) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          window.alert(err.error.message);
        }
      }
    );
  }

}
