import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { TokenService } from 'src/app/core/token.service';
import { ILoginCredentials, IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  loginFailed = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: ILoginCredentials): void {
    this.errorMessage = '';
    this.authService.login(formValue).subscribe(
      {
        next: (data: any) => {
          console.log(data);
          this.tokenService.saveToken(data['user-token']);
          this.tokenService.saveUser(data);

          this.loginFailed = false;
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.loginFailed = true;
          window.alert(this.errorMessage);
        }
      }
    );

  }

}
