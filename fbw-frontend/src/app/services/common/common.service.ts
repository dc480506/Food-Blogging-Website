import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL="http://localhost:3000/"
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor() { }
}
