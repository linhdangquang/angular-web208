import { IProduct } from './../../../models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  titlePage:string = 'Products';
  isStatus:boolean = false;
  inputValue:string = ''
  productsList: IProduct[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];
  changeStatus() {
    this.isStatus = !this.isStatus;
  }
  removeProduct(id: number) {
    this.productsList = this.productsList.filter((product) => product.id !== id);
  }
  constructor() {}

  ngOnInit(): void {}
}
