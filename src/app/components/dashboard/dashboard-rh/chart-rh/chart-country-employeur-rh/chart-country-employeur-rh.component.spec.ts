import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCountryEmployeurRhComponent } from './chart-country-employeur-rh.component';

describe('ChartCountryEmployeurRhComponent', () => {
  let component: ChartCountryEmployeurRhComponent;
  let fixture: ComponentFixture<ChartCountryEmployeurRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCountryEmployeurRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCountryEmployeurRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
