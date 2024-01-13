import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheResponsableComponent } from './add-tache-responsable.component';

describe('AddTacheResponsableComponent', () => {
  let component: AddTacheResponsableComponent;
  let fixture: ComponentFixture<AddTacheResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTacheResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
