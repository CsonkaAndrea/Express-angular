import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {
  productList: Product[] = [];
  productList$: Observable<Product[]> = this.productService.getAll();

  changeCounter: number = 0;
  filterPhrase: string = '';
  filterProp: string = 'name';
  orderDirection: number = 1;
  orderKey: string = 'name';
  removedId: number[] = [];


  constructor(private productService: ProductService) { }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
    Array.from(document.querySelectorAll('table thead tr th')).forEach(
      el => el.children[0] !== undefined ? el.removeChild(el.children[0]) : el);
    if (this.orderDirection === 1) {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-asc" aria-hidden="true"></i>';
    } else {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
    }
  }

  removeProduct(id) {
    console.log(id);
    this.productService.remove(id).forEach((data) => {
      console.log(data);
      this.removedId.push(id);
      console.log(this.removedId);
      this.changeCounter++;
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.productList = products;
      err => console.error(err)
    });
  }
}
