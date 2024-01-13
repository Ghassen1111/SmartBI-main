import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmail'
})
export class FilterEmailPipe implements PipeTransform {

  transform(objs:any,termEmail:any) {
    if (termEmail === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.email.toLowerCase().includes(termEmail.toLowerCase()) 
      || obj.email.toLowerCase().includes(termEmail.toLowerCase()));
    })
  }
}
