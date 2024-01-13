import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSommeProductForCategoryRlComponent } from './chart-somme-product-for-category-rl.component';

describe('ChartSommeProductForCategoryRlComponent', () => {
  let component: ChartSommeProductForCategoryRlComponent;
  let fixture: ComponentFixture<ChartSommeProductForCategoryRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSommeProductForCategoryRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSommeProductForCategoryRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
