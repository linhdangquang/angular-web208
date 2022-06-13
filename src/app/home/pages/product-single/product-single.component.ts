import { IProduct } from './../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  pageTitle !: String ;
  product!: IProduct;
  constructor(private productService: ProductsService, private title: Title, private activatedRoute: ActivatedRoute) {
     const id:number = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
     if(id){
      this.productService.getProductRequest(id).subscribe((data: IProduct) => {
        this.product = data;
        this.title.setTitle(data.name);
      });
     }
   }

  ngOnInit(): void {
  }

}
