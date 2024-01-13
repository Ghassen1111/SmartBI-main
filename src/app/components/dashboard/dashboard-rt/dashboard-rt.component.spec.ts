import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRtComponent } from './dashboard-rt.component';

describe('DashboardRtComponent', () => {
  let component: DashboardRtComponent;
  let fixture: ComponentFixture<DashboardRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
