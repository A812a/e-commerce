import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  allProduct:Product[] = []
  searchTerm:string = ''
  isLoading: boolean = false

  constructor(private _productsService:ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.isLoading = true
    this._productsService.getProducts().subscribe({
      next:(res) => {
        this.isLoading = false
        this.allProduct = res.data
        // console.log(this.allProduct);
      },
      error:(err) => {
        console.log(err)
        this.isLoading = false
      }
    })
  }

}
