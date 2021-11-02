import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(
    private _cookieService: CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this._cookieService.get('token');
      let newRequest = request;
      newRequest = request.clone({
        setHeaders : {
          authorization : `Bearer ${token}`,
          CUSTOM_HEADER : 'hellow'
        }
      });

      return next.handle(newRequest);

    } catch (error) {
      console.log('Error en interceptor', error);
      return next.handle(request);
    }
  }
}
