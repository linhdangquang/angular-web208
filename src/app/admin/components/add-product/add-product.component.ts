import { Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl(''),
  })
  
  constructor(private productsService: ProductsService, private router: Router) {}
  ngOnInit(): void {}
  
  onHandleAdd() {
    if (this.productForm.invalid) {
      return;
    }
    this.productsService.postProductRequest(this.productForm.value).subscribe(() => {
      this.router.navigate(['admin/products']);
    });
  }
}
