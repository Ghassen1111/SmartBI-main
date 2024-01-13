import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPourcentageDesBeneficesDesCategorieVendusRfComponent } from './chart-pourcentage-des-benefices-des-categorie-vendus-rf.component';

describe('ChartPourcentageDesBeneficesDesCategorieVendusRfComponent', () => {
  let component: ChartPourcentageDesBeneficesDesCategorieVendusRfComponent;
  let fixture: ComponentFixture<ChartPourcentageDesBeneficesDesCategorieVendusRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPourcentageDesBeneficesDesCategorieVendusRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPourcentageDesBeneficesDesCategorieVendusRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
