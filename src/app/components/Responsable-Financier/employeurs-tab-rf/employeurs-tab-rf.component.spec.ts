import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeursTabRfComponent } from './employeurs-tab-rf.component';

describe('EmployeursTabRfComponent', () => {
  let component: EmployeursTabRfComponent;
  let fixture: ComponentFixture<EmployeursTabRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeursTabRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeursTabRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
