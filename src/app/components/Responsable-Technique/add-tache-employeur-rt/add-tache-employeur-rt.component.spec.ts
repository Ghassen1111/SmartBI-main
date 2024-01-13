import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTacheEmployeurRtComponent } from './add-tache-employeur-rt.component';

describe('AddTacheEmployeurRtComponent', () => {
  let component: AddTacheEmployeurRtComponent;
  let fixture: ComponentFixture<AddTacheEmployeurRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTacheEmployeurRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTacheEmployeurRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
