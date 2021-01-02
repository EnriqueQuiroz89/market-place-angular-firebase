import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ¿Por que van en Declaraciones??
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
// POr que van en Importaciones?
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
