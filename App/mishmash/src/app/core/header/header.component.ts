import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged = false;
  user: IUser | null = null;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) {
    this.isLogged = this.authService.authenticate();
    this.user = this.tokenService.getUser();
   }

  ngOnInit(): void {
  }

  logoutHandler($event: MouseEvent): void {
    $event.preventDefault();
    this.authService.logout();
    this.tokenService.clearStorage();
    window.location.assign('/');
  }
}
