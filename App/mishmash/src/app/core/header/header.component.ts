import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.isLogged = this.authService.authenticate();
   }

  ngOnInit(): void {
  }

  logoutHandler(): void {
    this.authService.logout();
    this.tokenService.clearStorage();
    window.location.reload();
  }

}
