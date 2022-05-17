import { IProduct } from './../../../models/Product';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductsService } from 'src/app/products.service';

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
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getProducts();
  }

  dataSource!: MatTableDataSource<IProduct>;
  getProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.productsList = products;
      this.dataSource = new MatTableDataSource(this.productsList);
    })
  }
  constructor(private productsService: ProductsService) {}

  removeProduct(product: IProduct) {
    this.dataSource.data = this.dataSource.data
      .filter((item) => item.id !== product.id)
      .map((item, index) => ({ ...item, id: index + 1 }));
    console.log(product);
  }
  onHandleAdd(product: IProduct) {
    this.dataSource.data = [
      ...this.dataSource.data,
      { ...product, id: this.dataSource.data.length + 1 },
    ];
  }
  onHandleView(product: IProduct) {
    console.log(product);
    this.productDetail = product;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
