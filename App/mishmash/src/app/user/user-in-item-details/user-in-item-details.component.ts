import { Component, Input, OnInit } from '@angular/core';

import { IUserInItemDetails } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-in-item-details',
  templateUrl: './user-in-item-details.component.html',
  styleUrls: ['./user-in-item-details.component.css']
})
export class UserInItemDetailsComponent implements OnInit {

  @Input()
  userId!: string;
  isLoading = false;

  user!: IUserInItemDetails;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUserInItemDetails(this.userId).subscribe(user => {
      this.user = user;
      this.isLoading = false;
    });
  }

  getRatingAvg(): string {
    if (this.user.reviews.length === 0) {
      return '0.0';
    }
    const result = this.user.reviews.map(r => r.rating).reduce((a, b) => (a + b)) / this.user.reviews.length;
    return result.toFixed(1);
  }

}
