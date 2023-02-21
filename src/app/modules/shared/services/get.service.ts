import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpC:HttpClient) { }

  getProduct()
  {
    return this.httpC.get(environment.domainApi+'products')
  }
  // get Product Details
  getDetailProduct(id:any)
  {
    return this.httpC.get(environment.domainApi+'products/'+id)

  }
}
