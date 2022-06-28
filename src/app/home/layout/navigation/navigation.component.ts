import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IUser } from './../../../models/auth.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  user: IUser = JSON.parse(localStorage.getItem('user') as any);
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    if (this.user) {
      this.router.navigate(['/']);
    }
  }
  logOut() {
    this.authService.logOut();
    this.user = null as any;
    this.router.navigate(['/']);
  }
}
