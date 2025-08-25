import {ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {TabMenuModule} from "primeng/tabmenu";
import {LoginComponent} from "app/features/login-and-auth/login/login.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LoginComponent,
    RouterOutlet,
    TabMenuModule,
    LoginComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  currentRoute = '';
  items: MenuItem[] = [];
  showSignInDialog = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', id: 'home', command: () => this.onTabClick('home')},
      {label: 'Features', id: 'features', command: () => this.onTabClick('features')},
      {label: 'Pricing', id: 'pricing', command: () => this.onTabClick('pricing')},
      {label: 'Sign In', id: 'signin', command: () => this.onTabClick('signin')}
    ];

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.cdr.detectChanges();
        console.log(this.currentRoute);
      }
    });
  }

  onTabClick(id: string) {
    if (id === 'signin') {
      this.showSignInDialog = true;
    }
    this.router.navigate(['/' + id]);
  }
}
