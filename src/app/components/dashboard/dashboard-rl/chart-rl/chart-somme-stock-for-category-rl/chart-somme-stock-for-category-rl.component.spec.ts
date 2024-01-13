import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSommeStockForCategoryRlComponent } from './chart-somme-stock-for-category-rl.component';

describe('ChartSommeStockForCategoryRlComponent', () => {
  let component: ChartSommeStockForCategoryRlComponent;
  let fixture: ComponentFixture<ChartSommeStockForCategoryRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSommeStockForCategoryRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSommeStockForCategoryRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
