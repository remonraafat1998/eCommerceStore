import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../interfaces/cart';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getCart: Cart[] = []
  lengthCart: number = 0
  total: number =0
  constructor(private router:Router) { }
  ngOnInit(): void {
    this.unvisableHead();
    this.getcart();
  }


  // Hide One Pice From Header
  unvisableHead() {
    let endNav = document.querySelector('.end-nav');
    window.onscroll = () => {
      if (window.pageYOffset > 400) {
        endNav?.classList.add('unvisable')
      } else {
        endNav?.classList.remove('unvisable')
      }
    }
  }

  // get Cart Information
  getcart() {
    if ('__cart' in localStorage) {
      this.getCart = JSON.parse(localStorage.getItem('__cart')!);
      this.lengthCart = this.getCart.length
    }
  }

  // router Cart
  routerCart(){
    this.router.navigate(['cart'])
  }
}
