import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheEmployeurRfComponent } from './add-tache-employeur-rf.component';

describe('AddTacheEmployeurRfComponent', () => {
  let component: AddTacheEmployeurRfComponent;
  let fixture: ComponentFixture<AddTacheEmployeurRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTacheEmployeurRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheEmployeurRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
