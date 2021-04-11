import { AuthService } from './services/auth/auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
constructor(private authService:AuthService){}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.headers);
    let headers=req.headers;
  
    if (!req.headers.has('Content-Type')) {
      console.log("Checking header");
      const detectedType = req.detectContentTypeHeader();
      console.log("Detected:",detectedType)
      // Sometimes Content-Type detection fails.
      if (detectedType !== null) {
        headers=headers.set("Content-Type",detectedType);
      }
    }
    if(this.authService.isLoggedin()){
        // console.log("Inside");
        console.log(this.authService.userToken)
        headers=headers.set('x-auth-token',this.authService.userToken);
    }
    // console.log(headers);
    req = req.clone({withCredentials:true, headers: headers});
    // console.log(req);
    // console.log(document.cookie);
    return next.handle(req);
    // .pipe(
    //     map((event:HttpEvent<any>)=>{
    //         if(event instanceof HttpResponse){
    //             // if(event.headers.has('Set-Cookie')){
    //             //     console.log("Mil gaya");
    //             // }
    //             console.log(event.headers.keys())
    //         }
    //         return event
    //     }
    //     )
    // )
  }
}

function e(_e: any) {
  throw new Error('Function not implemented.');
}
