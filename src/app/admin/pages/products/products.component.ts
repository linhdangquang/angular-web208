import { Title } from '@angular/platform-browser';
import { IProduct } from '../../../models/product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit, OnInit {
  productsList!: IProduct[];
  titlePage: string = 'Products';
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  productDetail!: IProduct;
  dataSource: MatTableDataSource<IProduct> = new MatTableDataSource(
    this.productsList
  );
  constructor(private productsService: ProductsService, private titleService: Title) {
    this.titleService.setTitle(this.titlePage);
  }

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.productsService.getProductsRequest().subscribe((data: any) => {
      this.productsList = data;
      this.dataSource.data = this.productsList.map((item, idx) => ({
        ...item,
        index: idx + 1,
      }));
    });
  }

  removeProduct(product: IProduct) {
    this.productsService
      .deleteProductRequest(product.id as number)
      .subscribe(() => {
        this.productsList = this.productsList.filter(
          (item) => item.id !== product.id
        );
        this.dataSource.data = this.productsList.map((item, idx) => ({
          ...item,
          index: idx + 1,
        }));
      });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
