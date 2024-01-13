import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQtyProductVenteEtNonVenteComponent } from './chart-qty-product-vente-et-non-vente.component';

describe('ChartQtyProductVenteEtNonVenteComponent', () => {
  let component: ChartQtyProductVenteEtNonVenteComponent;
  let fixture: ComponentFixture<ChartQtyProductVenteEtNonVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQtyProductVenteEtNonVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQtyProductVenteEtNonVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
