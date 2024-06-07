import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginAndAuthComponent } from './login-and-auth/login-and-auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginAndAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'expense-management';

}
