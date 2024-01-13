import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent } from './chart-pourcentage-des-benefices-des-produits-non-vendus-rf.component';

describe('ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent', () => {
  let component: ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent;
  let fixture: ComponentFixture<ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
