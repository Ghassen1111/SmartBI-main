import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconReclamationRtComponent } from './icon-reclamation-rt.component';

describe('IconReclamationRtComponent', () => {
  let component: IconReclamationRtComponent;
  let fixture: ComponentFixture<IconReclamationRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconReclamationRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconReclamationRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
