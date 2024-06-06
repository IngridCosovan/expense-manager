import { Component } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from "@angular/forms";
import {ImageModule} from 'primeng/image';
import {ButtonModule} from "primeng/button";
import { TranslateModule } from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';


@Component({
  selector: 'app-login-and-auth',
  standalone: true,
  imports: [PasswordModule, FormsModule, ImageModule, ButtonModule, TranslateModule, InputTextModule],
  templateUrl: './login-and-auth.component.html',
  styleUrl: './login-and-auth.component.css'
})
export class LoginAndAuthComponent {
  value1: string = '';

  value2: string = '';

  value3: string = '';

  value4: string ='';
  username: any;
}
