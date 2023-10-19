import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { ConcatPipe } from './pipes/concat.pipe';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { CartModule } from './cart/cart.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    ConcatPipe,
    SearchProductPipe,
    CheckOutComponent,
    OrdersComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    CartModule
  ],
  exports: [
    LoaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
