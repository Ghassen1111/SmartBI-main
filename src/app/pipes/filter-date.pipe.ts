import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(objs:any,termDate:any) {
    if (termDate === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.date.toLowerCase().includes(termDate.toLowerCase()) 
      || obj.date.toLowerCase().includes(termDate.toLowerCase()));
    })
  }


}
