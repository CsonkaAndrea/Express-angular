import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {
  productList: Product[];
  product: Product = new Product();
  paramId: number;
  order: Order = new Order();

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.ar.params.forEach(params => this.paramId = params.id);

    this.productList = this.productService.proba();
    this.product = this.productList.filter(product => product.productID == this.paramId)[0];
    console.log('Jó productot ad ki? ', this.product);
    this.order.productID = this.product.productID
  }

  ngOnInit() {
    
  }

  onAdd(event: Event) {
    event.preventDefault();
    this.orderService.addUser(this.order).forEach(
      order => {
        console.log(order);
        this.router.navigateByUrl('/admin/order').then(resolve => console.log("sikeres oldalváltás"))
      }
    )
  }

}
