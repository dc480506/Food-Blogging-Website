import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from './../services/data.service';
export class CustomScroll{
    data: any[] = [];
    notscrolly = true;
    notEmptyResult = true;
    page = 1;
    limit = 4;
    constructor(private service:DataService, private spinner: NgxSpinnerService,page?:number,limit?:number){
        if(page && limit){
            this.page=page;
            this.limit=limit;
        }
    }
    loadInitData() {
        this.service.get(this.page, this.limit).subscribe((res) => {
          this.data = res;
          console.log(res);
        });
        this.page += 1;
      }
      onScroll() {
        if (this.notscrolly && this.notEmptyResult) {
          this.spinner.show();
          this.notscrolly = false;
          this.loadNextData();
        }
      }
      loadNextData() {
        this.service.get(this.page, this.limit).subscribe((res) => {
          this.page+=1;
          this.spinner.hide();
          if (res.length == 0) {
            this.notEmptyResult = false;
          }
          this.notscrolly=true;
          this.data = this.data.concat(res);
          console.log(res);
        });
      }
}