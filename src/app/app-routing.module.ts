import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';

const routes: Routes = [
  {path:'',component: HomePageComponent},
  {path:'cart',loadChildren: ()=> import('./modules/cart/cart.module').then(x=> x.CartModule)},
  {path:'product/:id', loadChildren: () => import('./modules/product/product.module').then(x => x.ProductModule) },
  {path:'**', redirectTo: '' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
