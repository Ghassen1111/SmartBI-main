import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconResponsableComponent } from './icon-responsable.component';

describe('IconResponsableComponent', () => {
  let component: IconResponsableComponent;
  let fixture: ComponentFixture<IconResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
