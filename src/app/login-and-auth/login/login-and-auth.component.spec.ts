import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndAuthComponent } from './login-and-auth.component';

describe('LoginAndAuthComponent', () => {
  let component: LoginAndAuthComponent;
  let fixture: ComponentFixture<LoginAndAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAndAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAndAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
