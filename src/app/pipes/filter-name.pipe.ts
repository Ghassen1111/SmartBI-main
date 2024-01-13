import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(objs:any,termName:any) {
    if (termName === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.name.toLowerCase().includes(termName.toLowerCase()) 
      || obj.name.toLowerCase().includes(termName.toLowerCase()));
    })
  }

}
