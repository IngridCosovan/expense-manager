import {Component, Input, OnInit} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {NgIf} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {PasswordValidatorService} from "app/core/validators/password-validator.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
    imports: [
        ButtonDirective,
        FormsModule,
        InputTextModule,
        NgIf,
        PasswordModule,
        ReactiveFormsModule
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  @Input() visible: boolean = false;
  signupDialogIsVisible = false;
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

  closeDialog() {
    this.signupDialogIsVisible = false;
  }
}
