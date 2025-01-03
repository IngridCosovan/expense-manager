import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from "@angular/forms";
import {ImageModule} from 'primeng/image';
import {ButtonModule} from "primeng/button";
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {MessageService} from "primeng/api";
import {CommonModule} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import { SignUpComponent } from "../sign-up/sign-up.component";



@Component({
  selector: 'app-login-and-auth',
  standalone: true,
  imports: [PasswordModule, FormsModule, ImageModule, ButtonModule, TranslateModule, InputTextModule, CommonModule, DialogModule, SignUpComponent],
  templateUrl: './login-and-auth.component.html',
  styleUrl: './login-and-auth.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class LoginAndAuthComponent {
  @Input()visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor() {}

  closeDialog() {
    this.visibleChange.emit(false);
  }

  openSignupDialog(event: Event){
    event.preventDefault();
    this.visible = false;
  }
}
