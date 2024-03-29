import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    let request = req;

    if(token) {
      request = req.clone({
        setHeaders: {
          authorization: token
        }
      });
    }else{
      request = req.clone({
        setHeaders: {
          authorization: ''
        }
      });
    }
    return next.handle(request);
  }
}
