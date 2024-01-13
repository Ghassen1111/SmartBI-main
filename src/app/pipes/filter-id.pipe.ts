import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterId'
})
export class FilterIdPipe implements PipeTransform {

  transform(objs:any,termId:any) {
    if (termId === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj._id.toLowerCase().includes(termId.toLowerCase()) 
      || obj._id.toLowerCase().includes(termId.toLowerCase()));
    })
  }

}
