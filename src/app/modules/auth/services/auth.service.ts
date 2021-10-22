import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;

  constructor(
    private _http: HttpClient,
    private _cookieService: CookieService
  ) { }

  public sendCredentials(email: string, password: string): Observable<any> {

    const body = { email, password };

    return this._http.post(`${this.URL}/auth/login`, body)
      .pipe(
        tap((res: any) => {
          const { tokenSession, data }  = res;

          this._cookieService.set('token', tokenSession, 4, '/');
        })
      )
  }

}
