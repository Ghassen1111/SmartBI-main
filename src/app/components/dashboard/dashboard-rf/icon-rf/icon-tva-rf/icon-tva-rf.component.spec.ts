import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTvaRfComponent } from './icon-tva-rf.component';

describe('IconTvaRfComponent', () => {
  let component: IconTvaRfComponent;
  let fixture: ComponentFixture<IconTvaRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTvaRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTvaRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
