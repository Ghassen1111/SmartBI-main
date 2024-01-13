import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheEmployeurRcComponent } from './add-tache-employeur-rc.component';

describe('AddTacheEmployeurRcComponent', () => {
  let component: AddTacheEmployeurRcComponent;
  let fixture: ComponentFixture<AddTacheEmployeurRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTacheEmployeurRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheEmployeurRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
