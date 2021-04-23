import { LocationService } from './../../services/location/location.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  data:any[]=[];
  search="";
  searchChanged: Subject<string> = new Subject<string>();
  private searchModelChangeSubscription: Subscription;


  lon=null;
  lat=null;
  count=6;
  start=0;
  subZone="";
  notEmptyResult=true;
  notscrolly = true;
  constructor(private service:RestaurantService,private spinner:NgxSpinnerService,private locationService:LocationService) {
    this.searchModelChangeSubscription=this.searchChanged.pipe(
      debounceTime(800), 
      distinctUntilChanged())
      .subscribe(newSearch => {
        this.search = newSearch;
        this.notEmptyResult=true;
        this.data=[];
        this.start=0;
        this.loadRestaurants()
      }
      );

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
    let data={}
    if(this.search==''){
      data={
        lon:this.lon,
        lat:this.lat
      }
    }else{
      data={
        q:this.search,
        count:this.count,
        start:this.start
      }
    }
    this.service.loadRestaurantData(data)
    .subscribe((res)=>{
      if(res.length==0){
        this.notEmptyResult=false;
      }
      this.start+=this.count;
      this.data=this.data.concat(res); 
      this.spinner.hide()
    });
  }
  onScroll(){
    // console.log("Yo");
    if(this.search!='' && this.notEmptyResult && this.notscrolly){
      console.log("Scroll working")
      this.loadRestaurants()
    }
  }

}
