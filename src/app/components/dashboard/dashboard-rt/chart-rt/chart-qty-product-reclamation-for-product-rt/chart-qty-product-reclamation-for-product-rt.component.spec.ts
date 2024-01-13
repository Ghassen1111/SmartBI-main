import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQtyProductReclamationForProductRtComponent } from './chart-qty-product-reclamation-for-product-rt.component';

describe('ChartQtyProductReclamationForProductRtComponent', () => {
  let component: ChartQtyProductReclamationForProductRtComponent;
  let fixture: ComponentFixture<ChartQtyProductReclamationForProductRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQtyProductReclamationForProductRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQtyProductReclamationForProductRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
