import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUserRhComponent } from './icon-user-rh.component';

describe('IconUserRhComponent', () => {
  let component: IconUserRhComponent;
  let fixture: ComponentFixture<IconUserRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconUserRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUserRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
