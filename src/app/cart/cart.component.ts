import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:Cart = {} as Cart
  isLoading: boolean = false

  constructor(private _cartService : CartService) {}

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    this.isLoading = true
    this._cartService.getCart().subscribe({
      next: (res) => {
        this.isLoading = false
        this.cartDetails = res
        console.log(this.cartDetails);
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false
      }
    })
  }

  updataCart(id:string,count:number) {
    this.isLoading = true

    if(count == 0) {
      this.removeItem(id);
      this._cartService.numOfCartItems.subscribe(res => {
        console.log(res)
      })
    } else {
      this._cartService.updataCart(id,count).subscribe((res: any) => {
        this.cartDetails = res
        this.isLoading = false
      })
    }
  }

  removeItem(id:string) {
    this.isLoading = true
    this._cartService.removeItem(id).subscribe({
      next:(res) => {
        this.cartDetails = res
        this.isLoading = false
        // console.log(res)
      },
      error:(err) => {
        console.log(err)
        this.isLoading = false
      }
    })
  }



}
