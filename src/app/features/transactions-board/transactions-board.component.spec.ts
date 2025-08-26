import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBoardComponent } from './transactions-board.component';

describe('TransactionsBoardComponent', () => {
  let component: TransactionsBoardComponent;
  let fixture: ComponentFixture<TransactionsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
