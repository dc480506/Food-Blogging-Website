import { LocationService } from './../../services/location/location.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from './../../services/data.service';
import { CustomScroll } from './../../common/scroll';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  data:any[]=[];
  search="";
  lon=null;
  lat=null;
  subZone="";
  constructor(private service:RestaurantService,private spinner:NgxSpinnerService,private locationService:LocationService) {
    
  }

  ngOnInit(): void {
    this.locationService.getLocationDetails()
    .subscribe(location=>{
      this.lon=location.longitude;
      this.lat=location.latitude;
      this.subZone=location.title+", "+location.city_name;
      this.loadRestaurants();
      console.log(location);
    })
  }

  loadRestaurants(){
    this.spinner.show();
    let data={
      lon:this.lon,
      lat:this.lat
    }
    this.service.loadRestaurantData(data)
    .subscribe((res)=>{this.data=res; this.spinner.hide()});
  }
  onScroll(){}

}
