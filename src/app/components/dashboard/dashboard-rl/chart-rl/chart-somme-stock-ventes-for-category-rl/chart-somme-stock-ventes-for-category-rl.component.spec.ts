import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSommeStockVentesForCategoryRlComponent } from './chart-somme-stock-ventes-for-category-rl.component';

describe('ChartSommeStockVentesForCategoryRlComponent', () => {
  let component: ChartSommeStockVentesForCategoryRlComponent;
  let fixture: ComponentFixture<ChartSommeStockVentesForCategoryRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSommeStockVentesForCategoryRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSommeStockVentesForCategoryRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
