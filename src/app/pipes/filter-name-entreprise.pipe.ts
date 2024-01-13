import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameEntreprise'
})
export class FilterNameEntreprisePipe implements PipeTransform {

  transform(objs:any,termNameEntreprise:any) {
    if (termNameEntreprise === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.nameEntreprise.toLowerCase().includes(termNameEntreprise.toLowerCase()) 
      || obj.nameEntreprise.toLowerCase().includes(termNameEntreprise.toLowerCase()));
    })
  }

}
