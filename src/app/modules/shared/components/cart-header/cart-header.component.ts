import { Component, OnInit } from '@angular/core';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {
  cartInf: Cart[] = []
  notInformationsCart: boolean = false
  loading: boolean = false
  total?: number;
  constructor() { }


  ngOnInit(): void {
    this.getCart();
    this.getTotalPrice()
  }


  //  Get Cart Informations
  getCart() {
    if ('__cart' in localStorage) {
      this.notInformationsCart = false
      this.loading = true
      this.cartInf = JSON.parse(localStorage.getItem('__cart')!)
      this.loading = false
    } else {
      this.notInformationsCart = true
    }
  }
  // getTotalPrice
  getTotalPrice() {
    this.total = 0
    for (let x in this.cartInf) {
      this.total += (this.cartInf[x].item.price * this.cartInf[x].quantity)
    }
  }
  // Delete From Cart

  deleteOnOfCart(index: any) {
    this.cartInf.splice(index, 1)
    this.getTotalPrice()
    localStorage.setItem(('__cart'), JSON.stringify(this.cartInf))
  }
}
