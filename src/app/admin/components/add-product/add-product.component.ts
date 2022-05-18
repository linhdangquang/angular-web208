import { IProduct } from '../../../models/product.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() createProduct = new EventEmitter<IProduct>();
  product: IProduct = {
    name : '',
    price : 0,
  }
  constructor() { }
  onSubmit() {
    this.createProduct.emit(this.product);
  }
  ngOnInit(): void {
  }

}
