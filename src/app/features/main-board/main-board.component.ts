import {Component, ViewEncapsulation} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {SideMenuComponent} from "app/features/side-menu/side-menu.component";
import {TranslateModule} from "@ngx-translate/core";
import {Button} from "primeng/button";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-board',
  standalone: true,
  imports: [
    AvatarModule,
    SideMenuComponent,
    TranslateModule,
    Button,
    RouterOutlet
  ],
  templateUrl: './main-board.component.html',
  styleUrl: './main-board.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MainBoardComponent {
  pageTitle = ''
  showAddButton = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log('event ', event)
      if (event instanceof NavigationEnd) {
        if (event.url.includes('transactions')) {
          this.pageTitle = 'Transactions';
          this.showAddButton = true;
        } else if (event.url.includes('dashboard')) {
          this.pageTitle = 'Dashboard';
          this.showAddButton = false;
        }
      }
    });
  }

  addTransaction() {
    console.log('works')
  }
}
