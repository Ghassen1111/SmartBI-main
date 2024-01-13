import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRlComponent } from './dashboard-rl.component';

describe('DashboardRlComponent', () => {
  let component: DashboardRlComponent;
  let fixture: ComponentFixture<DashboardRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
