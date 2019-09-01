import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceOrder'
})
export class PriceOrderPipe implements PipeTransform {

  transform(baseArray: any[], key: string = '', direction: number = 1): any {

  }

}
