import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { IUser } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    role: new FormControl(0, [Validators.required]),
  });
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router
  ) {
    this.titleService.setTitle('Sign Up');
  }

  ngOnInit(): void {}
  onSignUpHandler() {
    if (this.signUpForm.invalid) {
      console.log('Invalid Form');
      return;
    }
    this.authService
      .signUpRequest(this.signUpForm.value)
      .subscribe((data: IUser) => {
        console.log(data);
      });
  }
  onSignInHandler() {
    if (this.signInForm.invalid) {
      console.log('Invalid Form');
      return;
    }
    this.authService
      .signInRequest(this.signInForm.value)
      .subscribe((data: any) => {
        localStorage.setItem('user', JSON.stringify(data));
        console.log(data.user.role);
        if (data.user.role === 1) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      });
  }
}
