import {Component, DoCheck, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {FormsModule} from "@angular/forms";
import {ImageModule} from 'primeng/image';
import {ButtonModule} from "primeng/button";
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {AuthService} from "./auth.service";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MessageService} from "primeng/api";
import {CommonModule, NgOptimizedImage} from "@angular/common";



@Component({
  selector: 'app-login-and-auth',
  standalone: true,
  imports: [PasswordModule, FormsModule, ImageModule, ButtonModule, TranslateModule, InputTextModule, CommonModule, RouterLinkActive, RouterLink, NgOptimizedImage],
  templateUrl: './login-and-auth.component.html',
  styleUrl: './login-and-auth.component.css',
  providers: [MessageService]
})
export class LoginAndAuthComponent implements OnInit, DoCheck, OnDestroy{
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
      document.body.classList.add('special-background');
  }

  ngOnDestroy() {
    document.body.classList.remove('special-background');
  }

  onLogin(): void {
    // if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    // } else {
    //   this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid username or password'});
    // }
  }
}
