import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TabMenuModule } from 'primeng/tabmenu';
import { LoginComponent } from 'app/features/login-and-auth/login/login.component';
import { ButtonModule } from 'primeng/button';
import { UiStateService } from 'app/core/services/ui-state.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, TabMenuModule, ButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit, OnDestroy {
  private notifier = new Subject<void>();
  currentRoute = '';
  tabs: MenuItem[] = [];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    protected uiState: UiStateService,
  ) {}

  ngOnInit(): void {
    this.tabs = [
      { label: 'Home', id: 'home', command: () => this.onTabClick('home') },
      {
        label: 'Features',
        id: 'features',
        command: () => this.onTabClick('features'),
      },
      {
        label: 'Pricing',
        id: 'pricing',
        command: () => this.onTabClick('pricing'),
      },
      {
        label: 'Sign In',
        id: 'signin',
        command: () => this.onTabClick('signin'),
      },
    ];
    this.router.events.pipe(takeUntil(this.notifier)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }

  onTabClick(id: string): void {
    if (id === 'signin') {
      this.uiState.openLoginDialog();
    }
    this.router.navigate(['/' + id]);
  }
}
