import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { IUser } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})



export class AuthenticationComponent implements OnInit {
  signUpForm !: FormGroup;
  signInForm !: FormGroup;
  tabIndex: TabsForm = TabsForm.SignIn;
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.titleService.setTitle('Sign Up');
  }
 
  

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group({
       email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [0, [Validators.required]],
    })
  }

  onSignUpHandler() {
    if (this.signUpForm.invalid) {
      console.log('Invalid Form');
      return;
    }
    this.authService
      .signUpRequest(this.signUpForm.value)
      .subscribe((data: IUser) => {
        console.log(data);
        this.tabIndex = TabsForm.SignIn;
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
        console.log(data.user.role);
        if (data.user.role === 1) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      });
  }
}

enum TabsForm {
  SignUp = 0,
  SignIn = 1
}
