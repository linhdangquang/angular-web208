import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private REST_API_SERVER = 'http://localhost:3000';
  currentUser = {};
  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
      alert(error.error);
    }
    return throwError(() => errorMessage);
  }
  public signUpRequest(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${this.REST_API_SERVER}/signup`, user, httpOptions)
      .pipe(
        tap(() => this.toastr.success(`Sign up successfully!`)),
        catchError(this.handleError)
      );
  }
  public signInRequest(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${this.REST_API_SERVER}/signin`, user, httpOptions)
      .pipe(
        tap((user: any) => {
          localStorage.setItem('access_token', (user.accessToken));
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser = user;
          this.toastr.success(`Sign in successfully!`);
          return user;
        })
      );
  }

  public getToken(){
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  public logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.toastr.success('Log out successfully!');
  }
}
