import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BadInputError } from '../errors/bad-input-error';
export class DataService{
    private url="http://localhost:3000/api/";
    baseImageURL="http://localhost:3000/blogImages/";
    constructor(path:String,private http:HttpClient){
        this.url+=path;
    }
    get(page?:Number,limit?:Number,id?:string){
        var tempURL=this.url;
        if(page && limit){
            tempURL=this.url+`?page=${page}&limit=${limit}`;
        }
        else if(id) {tempURL=this.url+'/'+id}
        console.log(tempURL);
        return this.http.get(tempURL)
               .pipe(
                   map(response=>JSON.parse(JSON.stringify(response))),
                    catchError(this.handleError)
                )
    }

    create(resource:any){
        return this.http.post(this.url+"/",resource)
               .pipe(
                    map(response=>JSON.parse(JSON.stringify(response))),
                    catchError(this.handleError)
                )
    }
    update(resource:any){
        return this.http.put(this.url+"/"+resource.id,resource)
               .pipe(
                    map(response=>JSON.parse(JSON.stringify(response))),
                    catchError(this.handleError)
                )
    }

    delete(id:String){
        return this.http.get(this.url+"/"+id)
               .pipe(
                    map(response=>JSON.parse(JSON.stringify(response))),
                    catchError(this.handleError)
                )
    }

    handleError(error:Response){
        if(error.status==400)
            // return Observable.throw(new BadInputError());
            return throwError(new BadInputError());
        if(error.status==404)
            // return Observable.throw(new NotFoundError());
            return throwError(new NotFoundError());
        // return Observable.throw(new AppError());
        return throwError(new AppError());
    }
}