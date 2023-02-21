import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/modules/shared/components/snackbar/snackbar.component';
import { GetService } from 'src/app/modules/shared/services/get.service';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  getProduct: any[] = []
  SetToCart: any[] = []
  loading: boolean = false;
  constructor(public snackBar: MatSnackBar, private getServices: GetService) { }
  ngOnInit(): void {
    this.GetProductsInformations();
  }
  // getAllProduct
  GetProductsInformations() {
    this.loading = true
    this.getServices.getProduct().subscribe((data: any) => {
      this.getProduct = data;
      this.loading = false
    })
  }

  // addToCart
  addToCart(event: any) {
    if ('__cart' in localStorage) {
      this.SetToCart = JSON.parse(localStorage.getItem('__cart')!);
      let exit = this.SetToCart.find(id => id.item.id == event.item.id)
      if (exit) {
        alert('already Selected')
      } else {
        this.SetToCart.push(event);
        localStorage.setItem('__cart', JSON.stringify(this.SetToCart))
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: 500,
        });
      }
    } else {
      this.SetToCart.push(event);
      localStorage.setItem('__cart', JSON.stringify(this.SetToCart))
    }
  }
}
