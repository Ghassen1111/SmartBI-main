import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQtyProductReclamationForCategoryServiceRtComponent } from './chart-qty-product-reclamation-for-category-service-rt.component';

describe('ChartQtyProductReclamationForCategoryServiceRtComponent', () => {
  let component: ChartQtyProductReclamationForCategoryServiceRtComponent;
  let fixture: ComponentFixture<ChartQtyProductReclamationForCategoryServiceRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQtyProductReclamationForCategoryServiceRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQtyProductReclamationForCategoryServiceRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
