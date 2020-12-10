import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TokenService } from 'src/app/core/token.service';
import { IConversation, IMessage, IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-conversation',
  templateUrl: './active-conversation.component.html',
  styleUrls: ['./active-conversation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveConversationComponent {
  @Input()
  conversation!: IConversation;

  user!: IUser | null;
  errorMessage = '';

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {
    this.user = this.tokenService.getUser();
  }

  submitFormHandler(value: {message: string}): void {
    const body = {
      ownerUserName: this.user?.username,
      text: value.message
    };
    this.userService.postMessage(body).subscribe(
      {
        next: (data: IMessage) => {
          this.userService.postMessageInConversationRelation([data.objectId], this.conversation.objectId)
          .subscribe(
            {
              next: (d: any) => {
                window.location.reload();
              },
              error: (err) => {
                this.errorMessage = err.error.message;
                window.alert(this.errorMessage);
              }
            }
          );
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage);
        }
      }
    );
  }
}
