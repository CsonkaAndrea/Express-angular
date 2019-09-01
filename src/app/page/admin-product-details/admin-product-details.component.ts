import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';



@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {
  productList: Product[] = [];

  product: Product = new Product();
  paramId: number;

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    
  ) {
    this.ar.params.forEach(params => this.paramId = params.id);

    this.productList = this.productService.proba();
    this.product = this.productList.filter(product => product.productID == this.paramId)[0];
    console.log('Jó productot ad ki? ', this.product);
  }

  ngOnInit() {
  }

/*   onSubmit(ev: Event): void {
    ev.preventDefault();
    console.log('Itt hívom meg a service update metódusát!', this.productList);

  }
 */
  onUpdate(event:Event){
    event.preventDefault();
    this.productService.updateProduct(this.product).forEach(product =>{
      console.log(product);
      this.router.navigateByUrl('/admin/products').then(resolve => console.log("sikeres oldalváltás") )}
      )

  }

}
