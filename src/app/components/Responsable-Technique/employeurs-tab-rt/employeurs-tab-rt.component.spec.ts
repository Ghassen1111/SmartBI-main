import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeursTabRtComponent } from './employeurs-tab-rt.component';

describe('EmployeursTabRtComponent', () => {
  let component: EmployeursTabRtComponent;
  let fixture: ComponentFixture<EmployeursTabRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeursTabRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeursTabRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
