import { HttpClient, HttpResponse } from '@angular/common/http';
import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends CommonService {
  url=this.baseURL+'api/user/';
  constructor(private http: HttpClient) { 
    super();
  }
  login(credentials:any){
    return this.http.post(this.url+'login',JSON.stringify(credentials),{headers:this.headers,observe: 'response'})
    .pipe(map(response=> {

      let data=JSON.parse(JSON.stringify(response)).body;
      console.log("Data: ",data);
      if(data.token){
        localStorage.setItem("token",data.token);
        return true;
      }else{
        return false;
      }
    }))
  }

  logout(){

  }

  isLoggedin(){

  }
}
