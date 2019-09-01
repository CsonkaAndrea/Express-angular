import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'productsAdminFilter'
})
export class ProductsAdminFilterPipe implements PipeTransform {
  transform(baseArray: Product[], phrase: string = ''): any {
    return baseArray.filter(item => {
      let jsonBaseArray = JSON.stringify(item);
      return jsonBaseArray.toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }

}
