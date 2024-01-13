import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent } from './chart-pourcentage-des-benefices-des-categorie-non-vendus-rf.component';

describe('ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent', () => {
  let component: ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent;
  let fixture: ComponentFixture<ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
