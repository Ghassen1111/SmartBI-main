import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSommeCommandeForProductRcComponent } from './chart-somme-commande-for-product-rc.component';

describe('ChartSommeCommandeForProductRcComponent', () => {
  let component: ChartSommeCommandeForProductRcComponent;
  let fixture: ComponentFixture<ChartSommeCommandeForProductRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSommeCommandeForProductRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSommeCommandeForProductRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
