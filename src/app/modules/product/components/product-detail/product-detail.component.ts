import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from 'src/app/modules/shared/services/get.service';
import Swal from 'sweetalert2';
import { Cart } from '../../interfaces/cart';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  idProd?:any;
  product:any;
  setToCart:Cart[] = []
  loading:boolean = false
  actionLoading:boolean = false
constructor(private activatedR:ActivatedRoute,private apiServ:GetService,private router: Router){
  this.idProd = this.activatedR.snapshot.paramMap.get('id')
}
ngOnInit(): void {
this.getProduct();
}

// getProduct Details
getProduct()
{
  this.loading = true
  this.apiServ.getDetailProduct(this.idProd).subscribe((data:any)=>{
    this.product = data
    this.loading = false
  })
}

// add To Cart Function
addToCart(prod:any)
{
  this.actionLoading = true
  if('__cart' in localStorage)
  {
    this.setToCart = JSON.parse(localStorage.getItem('__cart')!)
    let exit = this.setToCart.find(id => id.item.id == prod.id)
    if(exit)
    {
      Swal.fire(
        'You Already Selected!',
        'Continue Shopping',
        'info'
      )
    }else
    {
      this.setToCart.push({
        item:prod,
        quantity:1,
        wishList:false
      });
      localStorage.setItem('__cart',JSON.stringify(this.setToCart))
      Swal.fire(
        'Done',
        'Continue Shopping',
        'success'
      )
    }
  }else
  {
    this.setToCart.push({
      item:prod,
      quantity:1,
      wishList:false
    });
    localStorage.setItem('__cart',JSON.stringify(this.setToCart))
    Swal.fire(
      'Done',
      'Continue Shopping',
      'success'
    )
  }
  this.actionLoading = false
}

// Buy Now  And Go To Cart Route Directly
buyNow(prod:any)
{
  this.actionLoading = true
  if('__cart' in localStorage)
  {
    this.setToCart = JSON.parse(localStorage.getItem('__cart')!)
    let exit = this.setToCart.find(id => id.item.id == prod.id)
    if(exit)
    {
      Swal.fire(
        'You Already Selected!',
        'Check out the Shopping Cart',
        'success'
      )
      this.router.navigate(['/cart'])
    }else
    {
      this.setToCart.push({
        item:prod,
        quantity:1,
        wishList:false
      });
      localStorage.setItem('__cart',JSON.stringify(this.setToCart))
      this.router.navigate(['/cart'])
    }
  }else
  {
    this.setToCart.push({
      item:prod,
      quantity:1,
      wishList:false
    });
    localStorage.setItem('__cart',JSON.stringify(this.setToCart))
    this.router.navigate(['/cart'])

  }
  this.actionLoading = false
}
}
