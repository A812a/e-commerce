import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  productId: string = ''
  productDetails:Product = {} as Product
  isLoading: boolean = false

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  constructor(private _activeteRoute:ActivatedRoute,
    private _productService:ProductsService,
    private _cartService:CartService) {

    this._activeteRoute.paramMap.subscribe((res:any) => {
      this.productId = res.params.id
      // console.log(this.productId);
    })
    this._productService.getProductById(this.productId).subscribe((res:any) => {
      this.productDetails = res.data
      // console.log(this.productDetails);
    })
  }

  addProduct(id:string) {
    this.isLoading = true
    this._cartService.addToCart(id).subscribe((res) => {
      this.isLoading = false
      console.log(res)
    })
  }

}
