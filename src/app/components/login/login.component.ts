import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service';
import { StorageService } from '../../services/storageService/storage.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
@Component({
  selector: 'app-login',
  imports: [CommonModule,        // Required for *ngIf, *ngFor
    ReactiveFormsModule, // ✅ Required for [formGroup]
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FloatLabelModule,
    RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private fb: FormBuilder,
              private authService: AuthService,
              private storageService: StorageService,
              private router: Router
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });



  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.router.navigate(['/admin-page']);

      },
      error: err => {
        console.log(err);
        alert(err.error.message || 'An error occurred during login.');
      }
    });
  }
  else {
      this.loginForm.markAllAsTouched();
    }
  }

}
