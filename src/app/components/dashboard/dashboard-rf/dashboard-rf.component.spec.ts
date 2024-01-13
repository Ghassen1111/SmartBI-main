import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRfComponent } from './dashboard-rf.component';

describe('DashboardRfComponent', () => {
  let component: DashboardRfComponent;
  let fixture: ComponentFixture<DashboardRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
