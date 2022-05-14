import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent, ProductsComponent } from './pages';
import { AdminComponent } from './admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products',
        component: ProductsComponent,
      },
      // {
      //   path: 'products/add',
      //   component: AddProductComponent,
      // }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
