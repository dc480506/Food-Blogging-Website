import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readLessMore'
})
export class ReadLessMorePipe implements PipeTransform {

  transform(value: string, limit?:number){
    if(!value)  return null;

    let actualLimit= (limit)?limit:30;
    if(value.length<actualLimit)
      return value
    return value.substr(0,actualLimit)+' ...';

  }

}
