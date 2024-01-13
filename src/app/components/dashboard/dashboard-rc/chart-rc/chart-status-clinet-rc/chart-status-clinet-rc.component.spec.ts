import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusClinetRcComponent } from './chart-status-clinet-rc.component';

describe('ChartStatusClinetRcComponent', () => {
  let component: ChartStatusClinetRcComponent;
  let fixture: ComponentFixture<ChartStatusClinetRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStatusClinetRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusClinetRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
