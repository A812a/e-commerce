import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {


  @Input() product:Product = {} as Product

  constructor(private _cartService:CartService) {}

  addProduct(id:string) {
    this._cartService.addToCart(id).subscribe({
      next:(res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
