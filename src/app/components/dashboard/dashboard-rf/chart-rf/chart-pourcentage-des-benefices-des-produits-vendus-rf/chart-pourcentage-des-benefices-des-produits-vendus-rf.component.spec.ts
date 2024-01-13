import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPourcentageDesBeneficesDesProduitsVendusRfComponent } from './chart-pourcentage-des-benefices-des-produits-vendus-rf.component';

describe('ChartPourcentageDesBeneficesDesProduitsVendusRfComponent', () => {
  let component: ChartPourcentageDesBeneficesDesProduitsVendusRfComponent;
  let fixture: ComponentFixture<ChartPourcentageDesBeneficesDesProduitsVendusRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPourcentageDesBeneficesDesProduitsVendusRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPourcentageDesBeneficesDesProduitsVendusRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
