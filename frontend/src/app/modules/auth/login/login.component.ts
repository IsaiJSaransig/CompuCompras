import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonAuthComponent } from '@shared/components/button-auth/button-auth.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonAuthComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly loginForm: FormGroup = new FormGroup({
    usernameFormControl: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),	
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
  });

  get usernameFormControl() {
    return this.loginForm.controls['usernameFormControl'];
  }

  get emailFormControl() {
    return this.loginForm.controls['emailFormControl'];
  }
  get passwordFormControl() {
    return this.loginForm.controls['passwordFormControl'];
  }

  
}
