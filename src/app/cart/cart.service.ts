import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:string | null = ''
  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(private _httpClient:HttpClient) {
    this.token = localStorage.getItem('userToken')

    this.getCart().subscribe((res:any) => {
      console.log('ahmed');
        this.numOfCartItems.next(res.numOfCartItems)
        console.log(res)

      })

  }

  addToCart(x:string) :Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId: x},
    {
      headers: {
        token : `${this.token}`
      }
    })
  }


  getCart() :Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers: {
        token : `${this.token}`
      }
    })
  }

  updataCart(productId:string,x:number) :Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {count : x},
    {
      headers: {
        token : `${this.token}`
      }
    })
  }

  removeItem(productId:string) :Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers: {
        token : `${this.token}`
      }
    })
  }

  generateOnlinePayment(cartId:string, shippingAddress:any) :Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {shippingAddress : shippingAddress},
    {
      headers: {
        token : `${this.token}`
      }
    }
    )
  }

}
