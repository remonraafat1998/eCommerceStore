import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AllProductComponent } from './components/all-product/all-product.component';
import {SharedModule} from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
const materialModules = [
  MatIconModule,
  MatTooltipModule,
]

@NgModule({
  declarations: [
    SingleProductComponent,
    AllProductComponent,
    ProductDetailComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    materialModules,
    SharedModule
  ],
  exports: [
  AllProductComponent,
    materialModules,
  ]
})
export class ProductModule { }
