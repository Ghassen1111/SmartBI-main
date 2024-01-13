import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeurComponent } from './add-employeur.component';

describe('AddEmployeurComponent', () => {
  let component: AddEmployeurComponent;
  let fixture: ComponentFixture<AddEmployeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
