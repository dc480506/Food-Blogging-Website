import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from 'src/app/errors/app-error';
import { BadInputError } from 'src/app/errors/bad-input-error';
import { NotFoundError } from 'src/app/errors/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL="http://localhost:3000/"
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor() { }
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
