import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(objs:any,termCategory:any) {
    if (termCategory === undefined) {
      return objs;
    }
    return objs.filter((obj)=> {
      return (obj.category.toLowerCase().includes(termCategory.toLowerCase()) 
      || obj.category.toLowerCase().includes(termCategory.toLowerCase()));
    })
  }

}
