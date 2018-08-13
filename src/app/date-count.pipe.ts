import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number   {
    let todayDate: Date = new Date();
    let todayNoTime: any = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
    var dateDifference = Math.abs(value - todayNoTime);
    const secondsADay = 86400;

    var dateDifferenceSeconds = dateDifference * 0.001;

    var dateCounter = dateDifferenceSeconds / secondsADay;

    if (dateCounter >= 1 ) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
