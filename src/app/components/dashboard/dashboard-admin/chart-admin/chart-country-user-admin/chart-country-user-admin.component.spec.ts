import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCountryUserAdminComponent } from './chart-country-user-admin.component';

describe('ChartCountryUserAdminComponent', () => {
  let component: ChartCountryUserAdminComponent;
  let fixture: ComponentFixture<ChartCountryUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCountryUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCountryUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
