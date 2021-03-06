import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private REST_API_SERVER = 'http://localhost:3000/products';
  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }

  public getProductsRequest(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.REST_API_SERVER);
  }

  public getProductRequest(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.REST_API_SERVER}/${id}`);
  }

  public postProductRequest(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(this.REST_API_SERVER, product).pipe(
      tap((data: IProduct) =>
        this.toastr.success(
          `Product ${data.name} has been added successfully`
        )
      ),
      catchError(this.handleError)
    );
  }

  public putProductRequest(product: IProduct, id: number): Observable<IProduct> {
    return this.httpClient.put<IProduct>(
      `${this.REST_API_SERVER}/${id}`,
      product
    ).pipe(
      tap(() =>
        this.toastr.success(`Product ${product.name} has been updated successfully`)
      ),
      catchError(this.handleError)
    );
  }

  public deleteProductRequest(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(`${this.REST_API_SERVER}/${id}`).pipe(
      tap(() =>
        this.toastr.success(`Product has been deleted successfully`)
      ),
      catchError(this.handleError)
    );
  }
}
