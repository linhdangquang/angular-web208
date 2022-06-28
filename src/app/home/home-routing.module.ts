import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '../utils/page404/page404.component';
import { HomeComponent } from './home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeShopComponent } from './pages/home-shop/home-shop.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { ProductsShopComponent } from './pages/products-shop/products-shop.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeShopComponent },
      { path: 'shop', component: ProductsShopComponent },
      { path: 'shop/:id', component: ProductSingleComponent },
      { path: 'sign-up', component: AuthenticationComponent },
    ],
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
