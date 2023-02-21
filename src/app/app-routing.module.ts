import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProductDetailComponent } from './modules/product/components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'',component: HomePageComponent},
  {path:'cart',loadChildren: ()=> import('./modules/cart/cart.module').then(x=> x.CartModule)},
  {path:'product/:id', component:ProductDetailComponent, loadChildren: () => import('./modules/product/product.module').then(x => x.ProductModule) },  // ,loadChildren: ()=> import ('./modules/cart/cart.module').then(y => y.CartModule)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
