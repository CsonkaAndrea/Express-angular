import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { AdminComponent } from './page/admin/admin.component';
import { ProductsAdminComponent } from './page/products-admin/products-admin.component';
import { ProductsComponent } from './page/products/products.component';
import { OrderDetailsComponent } from './page/order-details/order-details.component';
import { AdminProductDetailsComponent } from './page/admin-product-details/admin-product-details.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'admin/order', component: OrderAdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'products/:id', component: OrderDetailsComponent },
  { path: 'admin/products/:id', component: AdminProductDetailsComponent },
  { path: '**', component: IndexComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }