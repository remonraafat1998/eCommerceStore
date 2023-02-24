import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TooltipPosition } from '@angular/material/tooltip';
import Swal from 'sweetalert2';
import { Table } from '../../interface/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  dataCart: Table[] = []
  total?: number;
  carts: any;
  loading: boolean = false
  deleteLoading: boolean = false
  clearLoading: boolean = false
  sendCartLoad: boolean = false
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);


  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
     this.getData();
     this.getTotalPrice()
    }

  // get Data Of Cart From LocalStorage
  getData() {
    this.loading = true
    this.carts = JSON.parse(localStorage.getItem('__cart')!);
    this.dataCart = this.carts
    this.loading = false
  }
  // Total Price Of Cart
  getTotalPrice() {
    this.total = 0
    for (let x in this.dataCart) {
      this.total += (this.dataCart[x].item.price * this.dataCart[x].quantity)
    }
  }


  // Decrease the number of the product from  Cart Array
  minus(index: number) {
    this.dataCart[index].quantity--
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))

  }

  // Provide product number of  Cart Array
  plus(index: number) {
    this.dataCart[index].quantity++
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))
  }

  // get Total Of Cart After Any Changes
  changeCart() {
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))
  }

  //  delete One Product Of  Cart
  delete(index: number) {
    this.deleteLoading = true
    this.dataCart.splice(index, 1)
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Deleted',
      showConfirmButton: false,
      timer: 1500
    })
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart))
    this.deleteLoading = false
  }

  //  Clear All The Cart
  clearAll() {
    this.clearLoading = true
    this.dataCart = []
    this.getTotalPrice()
    localStorage.setItem('__cart', JSON.stringify(this.dataCart));
    this.clearLoading = false
  }

  //  Send Cart To BackEnd
  sendCart() {
    this.sendCartLoad = true
    let prod = this.dataCart.map((element) => {
      return {
        productId: element.item.id,
        quantity: element.quantity
      }
    })

    let modal = {
      userId: 5,
      date: new Date(),
      products: prod
    }
    console.log(modal)
    this.sendCartLoad = false
  }


}
