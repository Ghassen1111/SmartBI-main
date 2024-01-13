import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTabRtComponent } from './reclamation-tab-rt.component';

describe('ReclamationTabRtComponent', () => {
  let component: ReclamationTabRtComponent;
  let fixture: ComponentFixture<ReclamationTabRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationTabRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationTabRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
