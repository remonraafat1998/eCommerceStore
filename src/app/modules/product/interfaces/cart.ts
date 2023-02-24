export interface Cart {
  item:{
    category:string,
    description:string,
    id:number,
    image:string,
    price:number,
    rating:{
      count:number,
      rate:number
    },
    title:string
  },
  quantity:number,
  wishList:boolean
}
