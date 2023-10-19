import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../core/services/loader.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private _loaderservice:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  this._loaderservice.show();

    return next.handle(request).pipe(
      finalize(() => this._loaderservice.hide()));
  }
}
