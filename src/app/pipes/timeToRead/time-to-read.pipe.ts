import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToRead'
})
export class TimeToReadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if (value) {
      let reedSpeed = 5; // 1500 среднее
      let min = value / reedSpeed;
      return `${Math.round(min)} min read`;
    } else {
      return null;
    }
  }

  // {{ article.content.length | titeToRead }}

}
