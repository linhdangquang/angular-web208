import { ConfirmComponent } from './components/dialogs/confirm/confirm.component';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { EllipsisSpinnerComponent } from './components/ellipsis-spinner/ellipsis-spinner.component';
import { AuthInterceptor } from './helpers/authconfig.interceptor';

@NgModule({
  declarations: [AppComponent, AdminComponent, ConfirmComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true,
    }),
    AdminModule,
    HomeModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
