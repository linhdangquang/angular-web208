import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;
  imageLoaded: boolean = false;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {
    const id: number = this.router.snapshot.paramMap.get(
      'id'
    ) as unknown as number;
    this.productService.getProductRequest(id).subscribe((data: any) => {
      this.product = data;
    });
  }
  checkImageLoaded() {
    this.imageLoaded = true;
  }
  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg';

  }
  ngOnInit(): void {}
}
