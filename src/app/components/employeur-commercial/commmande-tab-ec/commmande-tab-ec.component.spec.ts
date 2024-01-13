import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmandeTabEcComponent } from './commmande-tab-ec.component';

describe('CommmandeTabEcComponent', () => {
  let component: CommmandeTabEcComponent;
  let fixture: ComponentFixture<CommmandeTabEcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmandeTabEcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmandeTabEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
