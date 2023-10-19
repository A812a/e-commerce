import { Component , OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/core/services/products.service';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  allCategories:Category[] = []

  constructor(private _productService:ProductsService) {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 3
      },
      700: {
        items: 5
      },
      900:{
        items: 8
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this._productService.getCategories().subscribe({
      next:(res) => {
        this.allCategories = res.data
        // console.log(this.allCategories)
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
