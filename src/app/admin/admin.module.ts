import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent, ProductsComponent } from './pages';

@NgModule({
  declarations: [ DashboardComponent, ProductsComponent],
  imports: [
    AdminRoutingModule,
    BrowserModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class AdminModule {}
