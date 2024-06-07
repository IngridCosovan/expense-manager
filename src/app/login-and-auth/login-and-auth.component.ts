import {Component, DoCheck, OnInit, SimpleChanges} from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from "@angular/forms";
import {ImageModule} from 'primeng/image';
import {ButtonModule} from "primeng/button";
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-login-and-auth',
  standalone: true,
  imports: [PasswordModule, FormsModule, ImageModule, ButtonModule, TranslateModule, InputTextModule, CommonModule],
  templateUrl: './login-and-auth.component.html',
  styleUrl: './login-and-auth.component.css',
  providers: [MessageService]
})
export class LoginAndAuthComponent implements OnInit, DoCheck{
  password = ''
  username = '';
  isDisabled = false;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
  }

  ngDoCheck(){
    if (this.password !== '' && this.username !== '') {
      this.isDisabled = false;
    }else if(this.password === '' || this.username === '') {
      this.isDisabled = true;
    }
  }

  ngOnInit() {
    this.isDisabled = true;

  }

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid username or password'});
    }
  }
}
