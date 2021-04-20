import { CommonService } from './../common/common.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends CommonService{

  constructor(private http:HttpClient) {
    super();
   }
   loadRestaurantData(data:any){
     return this.http.post(this.baseURL+"api/restaurants/fetch-restaurants",data)
              .pipe(
                map(response=>JSON.parse(JSON.stringify(response))),
                catchError(this.handleError)
            )
   }
}
