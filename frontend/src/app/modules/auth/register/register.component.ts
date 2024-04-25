import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonAuthComponent } from '@shared/components/button-auth/button-auth.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonAuthComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  readonly registerForm = new FormGroup({
    usernameFormControl: new FormControl('', [Validators.required]),
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required])
  })
  get usernameFormControl(){
    return this.registerForm.controls['usernameFormControl']
  }
  get emailFormControl() {
    return this.registerForm.controls['emailFormControl'];
  }
  get passwordFormControl() {
    return this.registerForm.controls['passwordFormControl'];
  }
}
