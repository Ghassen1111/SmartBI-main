import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeursTabRcComponent } from './employeurs-tab-rc.component';

describe('EmployeursTabRcComponent', () => {
  let component: EmployeursTabRcComponent;
  let fixture: ComponentFixture<EmployeursTabRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeursTabRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeursTabRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
