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
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  constructor(private titleService: Title, private authService: AuthService) {
    this.titleService.setTitle('Sign Up');
  }

  ngOnInit(): void {}
  onSubmit() {
    if(this.signUpForm.invalid){
      console.log('Invalid Form');
      return;
    }
    console.log(this.signUpForm.value);
    // this.authService.signUpRequest(this.signUpForm.value).subscribe((data: IUser) => {
    //   console.log(data);
    // })
  }
}
