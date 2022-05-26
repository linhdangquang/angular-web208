import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.css']
})
export class ProductsShopComponent implements OnInit {
  products!: IProduct[];
  constructor(private productsService: ProductsService, private titleService: Title) {
    this.productsService.getProductsRequest().subscribe(data => {
      this.products = data;
    });
    this.titleService.setTitle('Shops');
   }

  ngOnInit(): void {
   
  }

}
