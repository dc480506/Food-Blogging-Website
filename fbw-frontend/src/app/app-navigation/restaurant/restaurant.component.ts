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
  info="";
  lon=null;
  lat=null;
  constructor(private service:RestaurantService,private spinner:NgxSpinnerService,private locationService:LocationService) {
    
  }

  ngOnInit(): void {
    this.locationService.getPosition().then(
      pos=>{
        this.lon=pos.lon;
        this.lat=pos.lat;
        this.loadRestaurants();
      }
    )
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
