import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpC:HttpClient) { }
  // get  Category
  getAllCategory()
  {
    return this.httpC.get(environment.domainApi+'products/categories')
  }
  // get One Category
  getSpeseficCategory(name:string)
  {
    return this.httpC.get(environment.domainApi+'products/category/'+name)
  }

  // get Product
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
