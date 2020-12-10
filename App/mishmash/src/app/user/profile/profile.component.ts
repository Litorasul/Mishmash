import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { IUserInProfile } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id!: string;
  isLoading = false;
  isUserLogged = false;
  isOwnProfile = false;

  user!: IUserInProfile;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.isLoading = true;
    this.id = this.activatedRoute.snapshot.params.id;
    this.isUserLogged = this.authService.authenticate();
    this.checkAuthentication();
    this.isLoading = false;
  }

  checkAuthentication(): void {
    if (!this.isUserLogged) {
      this.router.navigate(['user/login']);
    }
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUserInProfile(this.id).subscribe(user => {
      this.user = user;
      this.isOwnProfile = this.authService.isOwner(user.objectId);
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
