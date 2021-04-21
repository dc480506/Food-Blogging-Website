import { HttpClient } from '@angular/common/http';
import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import 'lodash';

declare var _:any;
@Injectable({
  providedIn: 'root'
})
export class LocationService extends CommonService{

  constructor(private http:HttpClient) { 
    super();
  }

  private getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

 getLocationDetails(){
    return from(this.getPosition()).pipe(mergeMap(pos => {
      return this.http.get(this.baseURL+`restaurants/location?lon=${pos.lon}&lat=${pos.lat}`)
      .pipe(
        map(
          response=>JSON.parse(JSON.stringify(response))
        ),
        catchError(this.handleError)
      )    
    }));
  }
}
