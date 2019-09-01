import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsAdminSort'
})
export class ProductsAdminSortPipe implements PipeTransform {

  transform(baseArray: any[], key: string = '', direction: number = 1): any {
    if (key === '') {
      return baseArray;
    }

    baseArray.sort((a, b) => {
      if (typeof a[key] === 'number') {
        return ((a[key] - b[key]) * direction);
      } else {
        if (key === 'name') {
          return (a.name.toString() as string)
            .localeCompare(b.name.toString()) * direction;
        } else {
          return (a[key].toString() as string)
            .localeCompare(b[key].toString()) * direction;
        }
      }
    });

    return baseArray;
  }
}
