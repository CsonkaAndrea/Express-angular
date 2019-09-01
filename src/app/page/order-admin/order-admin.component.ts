import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';



@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})

export class OrderAdminComponent implements OnInit {
  orderList: Order[] = [];
  /* orderList$: Observable<Order[]> = this.orderService.getAll(); */
  orderKeys: Array<any> = [];

  constructor(private orderService: OrderService) { };

  ngOnInit() {
    this.orderService.getAll().subscribe(orders => {
      this.orderList = orders;
      err => console.error(err)
    })
  };

  // Table heads from orderList array.
  get orderListKeys() {
    let orderListKeys = [];
    for (const key in this.orderList[0]) {
      orderListKeys.push(key)
    }
    return this.orderKeys = orderListKeys;
  };



}
