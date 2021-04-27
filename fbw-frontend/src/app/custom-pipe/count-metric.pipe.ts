import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countMetric'
})
export class CountMetricPipe implements PipeTransform {

  transform(value: any): any {
    if(value<1000)
      return value;
    let newVal=value/1000
   
    return (newVal/0.0125)%1==0?newVal+"k":parseFloat(newVal.toString()).toFixed(1)+"k";
  }

}
