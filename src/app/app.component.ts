import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLinkActive, RouterOutlet, RouterModule} from '@angular/router';
import {LoginAndAuthComponent} from './login-and-auth/login/login-and-auth.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
  title = 'expense-management';

}
