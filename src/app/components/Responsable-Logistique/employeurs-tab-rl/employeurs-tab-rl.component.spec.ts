import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeursTabRlComponent } from './employeurs-tab-rl.component';

describe('EmployeursTabRlComponent', () => {
  let component: EmployeursTabRlComponent;
  let fixture: ComponentFixture<EmployeursTabRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeursTabRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeursTabRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
