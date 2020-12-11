import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cloudinary } from 'cloudinary-core';
import { AuthService } from 'src/app/core/auth.service';

import { ICategory, IItemDetails, IItemForSale, IItemToAdd, IPicture, IPictureToAdd } from 'src/app/shared/interfaces';
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

  isUserLogged = false;
  isLoading = false;
  categories: ICategory[] = [];

  constructor(
    private itemService: ItemsService,
    private router: Router,
    private authService: AuthService
  ) {
    this.isLoading = true;
    this.isUserLogged = this.authService.authenticate();
    this.checkAuthentication();
    this.itemService.getCategories().subscribe(c => {
      this.categories = c;
    });
    this.isLoading = false;

  }

  checkAuthentication(): void {
    if (!this.isUserLogged) {
      this.router.navigate(['user/login']);
    }
  }

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

  submitFormHandler(formValue: IItemToAdd): void {
    let uploadedItem: IItemDetails;
    const categoryId = formValue.category;
    this.itemService.postItemForSale(formValue as IItemDetails).subscribe(
      {
        next: (data: IItemDetails) => {
          uploadedItem = data;
          this.itemService.postItemInCategoryRelation([categoryId], uploadedItem.objectId).subscribe();
          if (this.addedPics.length > 0) {
            this.itemService.postPicturesToItemRelation(this.addedPics.map(p => p.objectId), uploadedItem.objectId)
            .subscribe(
              {
                next: (d: any) => {
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
