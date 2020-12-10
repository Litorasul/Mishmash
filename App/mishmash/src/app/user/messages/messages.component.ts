import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

import { IConversation } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input()
  userId!: string;
  activeConversation!: IConversation;

  isLoading = false;
  isUserLogged = false;

  receivedConversations!: IConversation[];
  startedConversations!: IConversation[];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.isLoading = true;
    this.userId = this.activatedRoute.snapshot.params.id;
    this.isUserLogged = this.authService.authenticate();
    this.checkAuthentication();
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getReceivedConversationsForUser(this.userId).subscribe(userConv => {
      this.receivedConversations = userConv.conversations;
    });
    this.userService.getStartedConversationsForUser(this.userId).subscribe(conv => {
      this.startedConversations = conv;
      this.isLoading = false;
    });
  }

  checkAuthentication(): void {
    if (!this.isUserLogged) {
      this.router.navigate(['user/login']);
    }
  }

  activeConversationChangeHandler(conv: IConversation): void {
    this.activeConversation = conv;
  }

}
