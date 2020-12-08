import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cloudinary } from 'cloudinary-core';

import { IItemDetails, IItemForSale, IPicture, IPictureToAdd } from 'src/app/shared/interfaces';
import { ItemsService } from '../items.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  errorMessage = '';
  private widget: any = null;
  private addedPics: IPicture[] = [];

  constructor(
    private itemService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: 'daal2scr5',
        uploadPreset: 'mishmashPreset'
      },
      (error: any, result: { data: any; }) => {
        if (result.data?.event === 'queues-end') {
          result.data.info.files.forEach((element: { uploadInfo: { url: any; thumbnail_url: any; }; }) => {
            const pic: IPictureToAdd = {
              url: element.uploadInfo.url,
              thumbnailUrl: element.uploadInfo.thumbnail_url
            };
            this.itemService.postPicture(pic).subscribe(
              {
                next: (data: IPicture) => {
                  this.addedPics.push(data);
                },
                error: (err) => {
                  this.errorMessage = err.error.message;
                  window.alert(this.errorMessage);
                }
              }

            );
          });
        }

        if (error) {
          console.log(error);
        }
      }
    );
  }

  openUploadHandler($event: any): void {
    $event.preventDefault();
    this.widget.open();
  }

  submitFormHandler(formValue: IItemForSale): void {
    let uploadedItem: IItemDetails;
    this.itemService.postItemForSale(formValue).subscribe(
      {
        next: (data: IItemDetails) => {
          uploadedItem = data;
          if (this.addedPics.length > 0) {
            this.itemService.postPicturesToItemRelation(this.addedPics.map(p => p.objectId), uploadedItem.objectId)
            .subscribe(
              {
                next: (d: any) => {
                  console.log(d);
                  this.router.navigate(['/']);
                },
                error: (err) => {
                  this.errorMessage = err.error.message;
                  window.alert(this.errorMessage);
                }
              }
            );
          }
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage);
        }
      }
    );
  }

}
