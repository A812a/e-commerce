import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  cartId:string = ''
  isLoading:boolean = false

  shoppingAddress:FormGroup = new FormGroup({
    details: new FormControl(),
    phone: new FormControl(),
    city: new FormControl()
  })

  constructor(private _cartService:CartService, private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe((res:any) => {
      this.cartId = res.params.cartId
      console.log(this.cartId)
    })
  }

  handleOnline() {
    this.isLoading = true
    this._cartService.generateOnlinePayment(this.cartId , this.shoppingAddress.value).subscribe({
      next:(res) => {
        console.log(res)
        if(res.status == 'success') {
          console.log(res.session.url)
          this.isLoading = false
          window.location.href = res.session.url
        }
      },
      error: (err) => console.log(err)
    })
  }

  generateOnlinePayment() {

  }
}
