import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'pfilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], sort: any): any {
    return items.filter(item => {
      return item.tag === sort;
    });
  }

}
