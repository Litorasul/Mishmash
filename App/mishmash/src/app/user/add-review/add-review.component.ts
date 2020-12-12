import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { IReview, IReviewWithId } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  forUserId!: string;
  isLoading = false;
  isUserLogged = false;
  isOwnProfile = false;

  ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.forUserId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isUserLogged = this.authService.authenticate();
    this.checkAuthentication();
    this.isOwnProfile = this.authService.isOwner(this.forUserId);
    if (this.isOwnProfile) {
      this.router.navigate(['/']);
    }
    this.isLoading = false;
  }

  checkAuthentication(): void {
    if (!this.isUserLogged) {
      this.router.navigate(['user/login']);
    }
  }

  submitFormHandler(formValue: IReview): void {
    this.userService.postReview(formValue).subscribe(
      {
        next: (data: IReviewWithId) => {
          this.userService.postReviewToUserRelation([data.objectId], this.forUserId).subscribe(
            {
              next: (d: any) => {
                this.router.navigate(['/']);
              },
              error: (err) => {
                window.alert(err.error.message);
              }
            }
          );
        },
        error: (err) => {
          window.alert(err.error.message);
        }
      }
    );
  }

}
