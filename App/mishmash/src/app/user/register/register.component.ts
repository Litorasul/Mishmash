import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { TokenService } from 'src/app/core/token.service';
import { IRegisterCredentials } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: IRegisterCredentials): void {
    this.errorMessage = '';
    this.authService.register(formValue).subscribe(
      {
        next: (data) => {
          this.router.navigate(['/user/login']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          window.alert(this.errorMessage);
        }
      }
    );
   }

}
