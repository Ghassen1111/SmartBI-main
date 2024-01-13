import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQtyProductReclamationForCategoryRtComponent } from './chart-qty-product-reclamation-for-category-rt.component';

describe('ChartQtyProductReclamationForCategoryRtComponent', () => {
  let component: ChartQtyProductReclamationForCategoryRtComponent;
  let fixture: ComponentFixture<ChartQtyProductReclamationForCategoryRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQtyProductReclamationForCategoryRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQtyProductReclamationForCategoryRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
