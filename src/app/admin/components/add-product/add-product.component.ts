import { Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: IProduct = {
    name: '',
    price: 0,
  };
  constructor(private productsService: ProductsService, private router: Router) {}
  ngOnInit(): void {}
  
  onHandleAdd() {
    this.productsService.postProductRequest(this.product).subscribe(() => {
      this.router.navigate(['admin/products']);
    });
  }
}
