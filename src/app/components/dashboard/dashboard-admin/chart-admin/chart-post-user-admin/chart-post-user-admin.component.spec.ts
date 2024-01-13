import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPostUserAdminComponent } from './chart-post-user-admin.component';

describe('ChartPostUserAdminComponent', () => {
  let component: ChartPostUserAdminComponent;
  let fixture: ComponentFixture<ChartPostUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPostUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPostUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
