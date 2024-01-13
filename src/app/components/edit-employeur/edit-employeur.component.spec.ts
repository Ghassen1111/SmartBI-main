import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeurComponent } from './edit-employeur.component';

describe('EditEmployeurComponent', () => {
  let component: EditEmployeurComponent;
  let fixture: ComponentFixture<EditEmployeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
