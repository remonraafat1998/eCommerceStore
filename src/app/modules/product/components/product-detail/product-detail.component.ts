import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from 'src/app/modules/shared/services/get.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  idProd?:any;
  product:any = []
  setToCart:any[] = []
  loading:boolean = false
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


addToCart(prod:any)
{
  if('__cart' in localStorage)
  {
    this.setToCart = JSON.parse(localStorage.getItem('__cart')!)
    let exit = this.setToCart.find(id => id.item.id == prod.id)
    if(exit)
    {
      alert('Already Selected')
    }else
    {
      this.setToCart.push({
        item:prod,
        quantity:1,
        wishList:false
      });
      localStorage.setItem('__cart',JSON.stringify(this.setToCart))
    }
  }else
  {
    this.setToCart.push({
      item:prod,
      quantity:1,
      wishList:false
    });
    localStorage.setItem('__cart',JSON.stringify(this.setToCart))
  }
}

buyNow(prod:any)
{
  if('__cart' in localStorage)
  {
    this.setToCart = JSON.parse(localStorage.getItem('__cart')!)
    let exit = this.setToCart.find(id => id.item.id == prod.id)
    if(exit)
    {
      alert('Already Selected')
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
}
}
