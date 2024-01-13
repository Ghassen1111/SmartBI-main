import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCountryClientRcComponent } from './chart-country-client-rc.component';

describe('ChartCountryClientRcComponent', () => {
  let component: ChartCountryClientRcComponent;
  let fixture: ComponentFixture<ChartCountryClientRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCountryClientRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCountryClientRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
