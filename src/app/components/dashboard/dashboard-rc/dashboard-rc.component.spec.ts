import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRcComponent } from './dashboard-rc.component';

describe('DashboardRcComponent', () => {
  let component: DashboardRcComponent;
  let fixture: ComponentFixture<DashboardRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
