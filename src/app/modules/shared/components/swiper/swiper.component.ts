
import { Component,OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Product } from 'src/app/modules/product/interfaces/product';
import {Subscription} from 'rxjs'
 // import Swiper core and required modules
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';

import { GetService } from '../../services/get.service';
// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnInit,OnDestroy {
getAllProduct:Product[] = []
loading:boolean = false
unsubProduct?:Subscription;
constructor(private servAp:GetService){}
ngOnInit(): void {
this.getProduct()
}
getProduct()
{
  this.loading = true
 this.unsubProduct = this.servAp.getProduct().subscribe((data:any)=> {
    this.getAllProduct = data
    this.loading = false
  })
}
ngOnDestroy(): void {
this.unsubProduct?.unsubscribe()
}
}
