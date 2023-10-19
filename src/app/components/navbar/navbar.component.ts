import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn: boolean = false
  numOfCartItems:number = 0
  linkedIn:string = 'https://www.linkedin.com/feed/'

  constructor(private _auth:AuthService, private _cartService:CartService) {


    this._auth.userData.subscribe((res) => {

      if(this._auth.userData.getValue()) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }

    })

    this._cartService.numOfCartItems.subscribe(res => {
      console.log('changing')
      this.numOfCartItems = res
      // console.log(this.numOfCartItems);
    })

  }


  logOut() {
    this._auth.logOut()
  }

}
