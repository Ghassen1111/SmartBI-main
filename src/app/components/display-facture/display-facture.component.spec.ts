import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFactureComponent } from './display-facture.component';

describe('DisplayFactureComponent', () => {
  let component: DisplayFactureComponent;
  let fixture: ComponentFixture<DisplayFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
