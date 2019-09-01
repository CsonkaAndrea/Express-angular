import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';
import { OrderDetailsComponent } from './page/order-details/order-details.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { AdminComponent } from './page/admin/admin.component';
import { ProductsAdminComponent } from './page/products-admin/products-admin.component';
import { ProductsComponent } from './page/products/products.component';
import { FilterPipe } from './pipe/filter.pipe';
import { PriceOrderPipe } from './pipe/price-order.pipe';
import { AdminProductDetailsComponent } from './page/admin-product-details/admin-product-details.component';
import { ProductsAdminFilterPipe } from './pipe/products-admin-filter.pipe';
import { ProductsAdminSortPipe } from './pipe/products-admin-sort.pipe';

@NgModule({ 
  declarations: [
    AppComponent,
    IndexComponent,
    OrderAdminComponent,
    OrderDetailsComponent,
    NavbarComponent,
    AdminComponent,
    ProductsAdminComponent,
    ProductsComponent,
    FilterPipe,
    PriceOrderPipe,
    AdminProductDetailsComponent,
    ProductsAdminFilterPipe,
    ProductsAdminSortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
