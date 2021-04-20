import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readLessMore'
})
export class ReadLessMorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
