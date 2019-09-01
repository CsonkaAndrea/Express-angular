import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  jsonUrl = 'http://localhost:3210/api/orders';
  order: Order[] = [];


  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.jsonUrl)
  }

  getSelectedOrder(id: number): Observable<any> {
    console.log(id);
    return this.http.get(`${this.jsonUrl}/${id}`)
  }
  remove(id: number): Observable<Order> {

    return this.http.delete<Order>(`${this.jsonUrl}/${id}`)
  }
  updateOrder(order: any): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${order.orderID}`, JSON.stringify(order), { responseType: 'text' })
  }
  addUser(order: Order): Observable<Order> {
    console.log('ezt az input tartalma: ', order);
    return this.http.post<Order>(this.jsonUrl, order);
  }

}
