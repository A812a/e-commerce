import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GuardCalssGuard } from './guard/guard-calss.guard';



const routes: Routes = [
  {path: '' , redirectTo:'home' , pathMatch:'full'},
  {path: 'home' , canActivate:[GuardCalssGuard] , component : HomeComponent , title : 'Home'},
  {path: 'categories' , canActivate:[GuardCalssGuard] , component : CategoriesComponent , title : 'Categories'},
  {path: 'productDetails/:id' , canActivate:[GuardCalssGuard] , component : ProductDetailsComponent },

  {path: 'login' , component : LoginComponent},
  {path: 'register' , component : RegisterComponent},
  {path: 'checkOut/:cartId' , component : CheckOutComponent},
  {path: 'allorders' , component : OrdersComponent},

  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },

  {path: '**' , component: NotFoundComponent , title: 'Not-Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
