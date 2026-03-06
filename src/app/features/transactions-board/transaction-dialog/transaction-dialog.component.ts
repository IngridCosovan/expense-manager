import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-dialog',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './transaction-dialog.component.html',
  styleUrl: './transaction-dialog.component.css',
})
export class TransactionDialogComponent {
  showAddButton = true;

  addTransaction(): void {
    console.log('works');
  }
}
