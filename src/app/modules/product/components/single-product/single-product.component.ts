import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  @Input() data: any = [];
  @Output() item = new EventEmitter();

  wishListArray: any[] = []
  amount: number = 1
  wishLists: boolean = false
  randomNum: number = Math.floor(Math.random() * 500)
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[4]);
  // Function add information Product
  addTo() {
    this.item.emit({ item: this.data, quantity: this.amount, wishList: this.wishLists })
  }
}
