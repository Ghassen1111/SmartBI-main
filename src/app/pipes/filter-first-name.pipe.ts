import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFirstName'
})
export class FilterFirstNamePipe implements PipeTransform {

  transform(objs:any,termFirstName:any) {
    if (termFirstName === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.firstName.toLowerCase().includes(termFirstName.toLowerCase()) 
      || obj.firstName.toLowerCase().includes(termFirstName.toLowerCase()));
    })
  }

}
