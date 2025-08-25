import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {NgIf} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {TranslateModule} from "@ngx-translate/core";
import {PasswordValidatorService} from "app/core/validators/password-validator.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        Button,
        ButtonDirective,
        DialogModule,
        FormsModule,
        InputTextModule,
        NgIf,
        PasswordModule,
        ReactiveFormsModule,
        TranslateModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  signUpIsOpen = false;
  signUpForm: FormGroup;

  constructor(private passwordValidator: PasswordValidatorService, private router: Router) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator.passwordValidator()]),
      passwordConfirmation: new FormControl('', [Validators.required, passwordValidator.passwordConfirmation()])
    })
  }

  closeDialog() {
    this.visibleChange.emit(false);
  }

  openSignupDialog(event: Event) {
    event.preventDefault();
    this.visible = false;
    this.signUpIsOpen = true;
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }

  signIn() {
    this.visible = false
    this.router.navigate(['/' + 'budget']);
  }
}
