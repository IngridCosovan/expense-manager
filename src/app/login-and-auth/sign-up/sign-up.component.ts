import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {
  PasswordValidatorService,
} from "../../shared/password-validator.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputTextModule, PasswordModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  signUpForm: FormGroup;

  constructor(private passwordValidator: PasswordValidatorService) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator.passwordValidator()]),
      passwordConfirmation: new FormControl('', [Validators.required, passwordValidator.passwordConfirmation()])
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
}
