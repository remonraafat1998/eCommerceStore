import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import { Table } from '../../interface/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  dataCart: Table[] = []
  total: any;
  carts: any;
  dataSource: any[] = []

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void { this.getData(); this.getTotalPrice() }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  getData() {
    this.carts = JSON.parse(localStorage.getItem('__cart')!);
    this.dataCart = this.carts

  }

  getTotalPrice() {
    this.total = 0
    for (let x in this.dataCart) {
      this.total += (this.dataCart[x].item.price * this.dataCart[x].quantity)
    }
  }
  minus(index: number) {
    this.dataCart[index].quantity--
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))

  }
  plus(index: number) {
    this.dataCart[index].quantity++
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))
  }

  changeCart() {
    this.getTotalPrice()

    localStorage.setItem('__cart', JSON.stringify(this.dataCart))
  }



  delete(index: number) {
    this.dataCart.splice(index, 1)
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))

  }

  clearAll() {
    this.dataCart = []
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))
  }



sendCart()
{
  let prod = this.dataCart.map((element)=> {
    return{
      productId:element.item.id,
      quantity:element.quantity
    }
  })

  let modal = {
    userId:5,
     date: new Date(),
     products : prod
  }
  console.log(modal)
}
}
