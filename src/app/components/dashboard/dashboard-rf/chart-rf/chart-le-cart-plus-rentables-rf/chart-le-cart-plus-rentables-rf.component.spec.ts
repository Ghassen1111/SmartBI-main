import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLeCartPlusRentablesRfComponent } from './chart-le-cart-plus-rentables-rf.component';

describe('ChartLeCartPlusRentablesRfComponent', () => {
  let component: ChartLeCartPlusRentablesRfComponent;
  let fixture: ComponentFixture<ChartLeCartPlusRentablesRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLeCartPlusRentablesRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLeCartPlusRentablesRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
