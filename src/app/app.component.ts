import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import { LoginAndAuthComponent } from './login-and-auth/login-and-auth.component';
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginAndAuthComponent, RouterModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
  title = 'expense-management';

}
