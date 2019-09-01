import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  jsonUrl = 'http://localhost:3210/api/products';
  productList: Product[];

  constructor(private http: HttpClient) {
    this.getAll().subscribe(products => {
      this.productList = products;
      err => console.error(err)
    });
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  proba() {
    return this.productList;
  }

  getSelectedProduct(id: number): Observable<any> {
    console.log(id);
    return this.http.get(`${this.jsonUrl}/${id}`);
  }

  remove(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.jsonUrl}/${id}`);
  }

  updateProduct(product: any): Observable<any> {
    console.log('halo');
    return this.http.put(`${this.jsonUrl}/${product.productID}`, product, { responseType: 'text' });
  }

  addUser(product: Product): Observable<Product> {
    return this.http.post<Product>(this.jsonUrl, product);
  }
}




