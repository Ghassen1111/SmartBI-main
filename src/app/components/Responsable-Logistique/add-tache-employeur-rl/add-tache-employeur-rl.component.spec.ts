import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheEmployeurRlComponent } from './add-tache-employeur-rl.component';

describe('AddTacheEmployeurRlComponent', () => {
  let component: AddTacheEmployeurRlComponent;
  let fixture: ComponentFixture<AddTacheEmployeurRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTacheEmployeurRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheEmployeurRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
