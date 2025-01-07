import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ImageModule} from 'primeng/image';
import {ButtonModule} from "primeng/button";
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {MessageService} from "primeng/api";
import {CommonModule} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import { PasswordValidatorService } from '../../shared/password-validator.service';
import { SignUpComponent } from "../sign-up/sign-up.component";



@Component({
  selector: 'app-login-and-auth',
  standalone: true,
  imports: [PasswordModule, FormsModule, ImageModule, ButtonModule, TranslateModule, InputTextModule, CommonModule, DialogModule, ReactiveFormsModule, SignUpComponent],
  templateUrl: './login-and-auth.component.html',
  styleUrl: './login-and-auth.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class LoginAndAuthComponent {
  @Input()visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  stateSignUpDialog = false;
  signUpIsOpen = false;
    signUpForm: FormGroup;

  constructor(private passwordValidator: PasswordValidatorService) {
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
}
