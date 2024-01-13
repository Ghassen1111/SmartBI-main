import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeurTabComponent } from './employeur-tab.component';

describe('EmployeurTabComponent', () => {
  let component: EmployeurTabComponent;
  let fixture: ComponentFixture<EmployeurTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeurTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeurTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
