import { HttpClient, HttpResponse } from '@angular/common/http';
import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
 
const jwthelper = new JwtHelperService();
 

@Injectable({
  providedIn: 'root'
})
export class AuthService extends CommonService {
  url=this.baseURL+'api/user/';
  constructor(private http: HttpClient) { 
    super();
  }
  login(credentials:any,type:any){
    return this.http.post(this.url+type,credentials,{observe: 'response'})
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
    localStorage.removeItem('token');
  }

  isLoggedin(){
    let token=localStorage.getItem('token');
    if(!token)
      return false;
    // console.log("Expiry:",jwthelper.isTokenExpired(token));
    if(jwthelper.isTokenExpired(token)){
      localStorage.removeItem('token');
      return false;
    }
    // console.log("Aa aaa")
    return true;
  }

  get currentUser(){
    let token=localStorage.getItem('token');
    if(!token)
      return null;
    const decodedToken = jwthelper.decodeToken(token);
    // console.log(decodedToken);
    return decodedToken.name;
    
  }
  get userToken(){
    let token=localStorage.getItem('token');
    if(!token)
      return "";
    return token;
    }
}
