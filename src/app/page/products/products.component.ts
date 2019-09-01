import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  productList$: Observable<Product[]> = this.productService.getAll();
  filterPhrase: string = '';
  changeCounter: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.productList = products;
      err => console.error(err)
    });
  }

  sortAscending() {
    this.productList.sort((a, b) => {
      return (a.price - b.price);
    })
    this.changeCounter++;
    console.log(this.productList);
  }

  sortDescending() {
    this.productList.sort((a, b) => {
      return (b.price - a.price);
    })
    this.changeCounter++;
    console.log(this.productList);
  }

}
