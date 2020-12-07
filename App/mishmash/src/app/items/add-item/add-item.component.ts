import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IItemDetails, IItemForSale } from 'src/app/shared/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  errorMessage = '';

  constructor(
    private itemService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: IItemForSale): void {
    this.itemService.postItemForSale(formValue).subscribe(
      {
        next: (data: IItemDetails) => {
          console.log(data);
          this.router.navigate([`/details/${data.objectId}`]);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage);
        }
      }
    );
  }

}
