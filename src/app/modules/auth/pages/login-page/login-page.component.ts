import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(
    private _authService: AuthService,
    private _cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email : new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password : new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ])
    });
  }


  sendLogin(): void {
    const { email, password } = this.formLogin.value;

    this._authService.sendCredentials(email, password)
      .subscribe((response) => {
        // console.log('Sesión inicada');
        // this._cookieService.set('token', response.tokenSession, 4, '/');
      },
      err => {
        this.errorSession = true;
      });
  }

}
