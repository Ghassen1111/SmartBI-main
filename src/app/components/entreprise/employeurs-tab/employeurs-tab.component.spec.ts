import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeursTabComponent } from './employeurs-tab.component';

describe('EmployeursTabComponent', () => {
  let component: EmployeursTabComponent;
  let fixture: ComponentFixture<EmployeursTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeursTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeursTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
