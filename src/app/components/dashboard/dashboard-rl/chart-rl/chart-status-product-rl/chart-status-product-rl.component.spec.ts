import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusProductRlComponent } from './chart-status-product-rl.component';

describe('ChartStatusProductRlComponent', () => {
  let component: ChartStatusProductRlComponent;
  let fixture: ComponentFixture<ChartStatusProductRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStatusProductRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusProductRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
