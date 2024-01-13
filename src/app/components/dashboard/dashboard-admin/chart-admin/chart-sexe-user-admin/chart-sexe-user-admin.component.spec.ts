import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSexeUserAdminComponent } from './chart-sexe-user-admin.component';

describe('ChartSexeUserAdminComponent', () => {
  let component: ChartSexeUserAdminComponent;
  let fixture: ComponentFixture<ChartSexeUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSexeUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSexeUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
