import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCommandeComponent } from './payment-commande.component';

describe('PaymentCommandeComponent', () => {
  let component: PaymentCommandeComponent;
  let fixture: ComponentFixture<PaymentCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
