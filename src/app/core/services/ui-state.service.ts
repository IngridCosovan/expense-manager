import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  showLoginDialog = signal(false);

  openLoginDialog(): void {
    this.showLoginDialog.set(true);
  }

  closeLoginDialog(): void {
    this.showLoginDialog.set(false);
  }
}
