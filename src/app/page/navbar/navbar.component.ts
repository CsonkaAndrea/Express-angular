import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productList: Product[] = [];
  productList$: Observable<Product[]> = this.productService.getAll();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(products => {
      this.productList = products;
      err => console.error(err)
    });
    console.log(this.productList);
  }

  navbarSearch(phrase) {
    return this.productList.filter(item => {
      let jsonString = JSON.stringify(item)
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return JSON.stringify(item).toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
    console.log(this.productList);
  }

}
