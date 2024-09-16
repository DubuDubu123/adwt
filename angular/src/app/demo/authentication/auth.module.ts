import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component'; // Ensure this path is correct
import { SignUpComponent } from './sign-up/sign-up.component'; // Ensure this path is correct

@NgModule({
  declarations: [
    SignInComponent
    // SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
