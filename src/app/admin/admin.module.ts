import { AdminComponent } from './admin.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent, ProductsComponent } from './pages';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
  ],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
})
export class AdminModule {}
