import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}
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
  public signUpRequest(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.REST_API_SERVER}/signup`, user).pipe(
      tap(() =>
        this.toastr.success(`Sign up successfully!`)
      ),
      catchError(this.handleError)
    );
  }
  public signInRequest(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.REST_API_SERVER}/signin`, user).pipe(
      tap(() =>
        this.toastr.success(`Sign in successfully!`)
      ),
      catchError(this.handleError)
    );
  }
}
