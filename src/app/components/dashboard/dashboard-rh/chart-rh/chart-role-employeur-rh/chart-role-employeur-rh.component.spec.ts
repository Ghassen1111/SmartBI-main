import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRoleEmployeurRhComponent } from './chart-role-employeur-rh.component';

describe('ChartRoleEmployeurRhComponent', () => {
  let component: ChartRoleEmployeurRhComponent;
  let fixture: ComponentFixture<ChartRoleEmployeurRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRoleEmployeurRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRoleEmployeurRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
