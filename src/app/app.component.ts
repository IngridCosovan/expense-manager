import {Component, ViewEncapsulation} from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'expense-management';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
