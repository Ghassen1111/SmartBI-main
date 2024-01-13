import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusUserAdminComponent } from './chart-status-user-admin.component';

describe('ChartStatusUserAdminComponent', () => {
  let component: ChartStatusUserAdminComponent;
  let fixture: ComponentFixture<ChartStatusUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStatusUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
