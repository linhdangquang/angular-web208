import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
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
  formTitle = 'Add Product';
  product!: IProduct;
  numberReg = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(this.numberReg)],),
    description: new FormControl(''),
    status: new FormControl('true', [Validators.required]),
    image: new FormControl('http://loremflickr.com/640/480/food'),
  });

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle('Add Product');
    const id: number = this.activatedRoute.snapshot.paramMap.get(
      'id'
    ) as unknown as number;
    if (id) {
      this.productsService.getProductRequest(id).subscribe((data: any) => {
        this.product = data;
        this.productForm.patchValue(this.product);
      });
      this.titleService.setTitle('Edit Product');
      this.formTitle = 'Edit Product';
    }
  }
  ngOnInit(): void {}

  onHandleAdd() {
    if (this.productForm.invalid) {
      return;
    }
    if (this.product) {
      this.productsService
        .putProductRequest(this.productForm.value, this.product.id as number) 
        .subscribe(() => {
          this.router.navigate(['/admin/products']);
        });
    } else {
      this.productsService
        .postProductRequest(this.productForm.value)
        .subscribe(() => {
          this.router.navigate(['admin/products']);
        });
    }
  }
}
