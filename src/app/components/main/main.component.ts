import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../services/user/user.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-main',
    imports: [ButtonModule, ReactiveFormsModule, InputTextModule, NgIf, NgClass],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent {
  submissionSuccess: boolean = false;
  submissionError: boolean = false;
  errorMessage: string = '';
  constructor(
    private userService: UserService,
    private fb: FormBuilder

  ) {}

  user = this.fb.group({
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]]
      })
  ngOnInit() {
    this.user.valueChanges.subscribe(values => {
      if(this.submissionError){
        this.submissionError = false;
        this.errorMessage = '';
      }
    });

  }



  onSubmit(){
    console.log(this.user)
    if(this.user.valid){
      console.log(this.user.value);
      const email = this.user.value.email;
      this.userService.saveUserEmail(email??'').subscribe({
          next: data => {
            console.log(data);
            this.submissionSuccess = true;

          },
          error: err => {
            console.log(err.error);
            this.submissionError = true;
            if(err.error.error_tag === 'DUPLICATE-ENTRY'){
              this.errorMessage = ' تم تسجيل هذا البريد الإلكتروني مسبقًا. يرجى استخدام بريد آخر.' ;
            }
        }
      });
    }
  }
}

