import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

@Injectable()
export class CustomInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req=req.clone({withCredentials:true})
        return next.handle(req)
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
    throw new Error("Function not implemented.");
}
