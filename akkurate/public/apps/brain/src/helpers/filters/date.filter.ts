import { Pipe, ChangeDetectorRef, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/fr';


const momentConstructor: (value?: any) => moment.Moment = (<any>moment).default || moment;

@Pipe({
  name: 'formatDate'
})
export class FormatDate implements PipeTransform {
  transform(date, format) {
    moment.locale();    
    return moment(date).format("LLLL");
  }
}


@Pipe({
  name: 'reverseArray',
  pure: false
})

export class ReversePipe implements PipeTransform {
  transform (Result: any) {
    if (Result) {
      return Result.reverse();
    }
  }
}