import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
const materialModules =[
  MatTooltipModule,
  MatIconModule
]

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    materialModules
  ],
  exports: [CartComponent]
})
export class CartModule { }
