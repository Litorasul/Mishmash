import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/core/token.service';
import { IConversationToCreate, IUser, IUserInItemDetails } from 'src/app/shared/interfaces';
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
  currentUser!: IUser | null;

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.currentUser = this.tokenService.getUser();
   }

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

  sendMessageHandler(): void {
    const conversation: IConversationToCreate = {
      ownerUserName: this.currentUser?.username,
      receiverUserName: this.user.username
    };
    const result = this.userService.createConversation(conversation, this.user.objectId);
    this.router.navigate([`user/messages/${this.currentUser?.objectId}`]);
  }

}
