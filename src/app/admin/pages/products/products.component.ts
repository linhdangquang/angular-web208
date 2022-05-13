import { IProduct } from './../../../models/Product';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements AfterViewInit {
  titlePage: string = 'Products';
  inputValue: string = '';
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  productsList: IProduct[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
    { id: 6, name: 'Product 6', price: 600 },
    { id: 7, name: 'Product 7', price: 700 },
    { id: 8, name: 'Product 8', price: 800 },
    { id: 9, name: 'Product 9', price: 900 },
    { id: 10, name: 'Product 10', price: 1000 },
    { id: 11, name: 'Product 11', price: 1100 },
  ];
  dataSource: MatTableDataSource<IProduct> = new MatTableDataSource(
    this.productsList
  );

  constructor() {}
    
  removeProduct(product: IProduct) {
    this.dataSource.data = this.dataSource.data
      .filter((item) => item.id !== product.id)
      .map((item, index) => ({ ...item, id: index + 1 }));
    console.log(product);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
