import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductsShopComponent } from './pages/products-shop/products-shop.component';
import { MaterialModule } from '../material.module';
import { EllipsisSpinnerComponent } from '../components/ellipsis-spinner/ellipsis-spinner.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [NavigationComponent, FooterComponent, ProductsShopComponent, EllipsisSpinnerComponent, SignUpComponent],
  imports: [
    HomeRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  exports: [NavigationComponent, FooterComponent, EllipsisSpinnerComponent],
})
export class HomeModule {}
