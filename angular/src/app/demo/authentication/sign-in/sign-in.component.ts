import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // If you're using mat-input inside mat-form-field

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements AfterViewInit {
  loginForm: FormGroup;
  showError: boolean = false;
  errorMessage: string = '';
  loading: boolean = false; // Loader flag

  @ViewChild('emailInput') emailInput!: ElementRef;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.emailInput.nativeElement.focus();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.displayErrors();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.login(email, password);
  }

  login(email: string, password: string) {
    this.loading = true; 
    this.showError = false;
    setTimeout(() => {
      this.loading = false; // Hide loader
      this.router.navigate(['/dashboard']); 
    }, 2000); // Delay of 3 seconds
    // this.router.navigate(['/dashboard']); 
    console.log('Login API called with', { email, password });
  }

  forgetPassword() {
    console.log('Forgot Password clicked');
  }

  displayErrors() {
    this.showError = false;
    this.errorMessage = '';

    if (this.email?.hasError('required')) {
      this.errorMessage = 'Email is required.';
    } else if (this.email?.hasError('email')) {
      this.errorMessage = 'Invalid email format.';
    } else if (this.password?.hasError('required')) {
      this.errorMessage = 'Password is required.';
    }

    if (this.errorMessage) {
      this.showError = true;
      // setTimeout(() => this.showError = false, 3000); // Hide after 3 seconds
    }
  }

}
