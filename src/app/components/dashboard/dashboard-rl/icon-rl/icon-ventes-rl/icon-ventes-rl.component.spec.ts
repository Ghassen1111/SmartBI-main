import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconVentesRlComponent } from './icon-ventes-rl.component';

describe('IconVentesRlComponent', () => {
  let component: IconVentesRlComponent;
  let fixture: ComponentFixture<IconVentesRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconVentesRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconVentesRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
