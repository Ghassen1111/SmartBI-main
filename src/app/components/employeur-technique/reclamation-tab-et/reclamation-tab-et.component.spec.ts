import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTabEtComponent } from './reclamation-tab-et.component';

describe('ReclamationTabEtComponent', () => {
  let component: ReclamationTabEtComponent;
  let fixture: ComponentFixture<ReclamationTabEtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationTabEtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationTabEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
