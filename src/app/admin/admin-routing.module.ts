import { Page404Component } from './../utils/page404/page404.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent, ProductsComponent } from './pages';
import { AdminComponent } from './admin.component';
import { AddProductComponent, ProductDetailComponent } from './components';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/add',
        component: AddProductComponent,
      },
      {
        path: 'products/view/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'products/edit/:id',
        component: AddProductComponent,
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
