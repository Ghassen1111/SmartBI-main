import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTabRfComponent } from './reclamation-tab-rf.component';

describe('ReclamationTabRfComponent', () => {
  let component: ReclamationTabRfComponent;
  let fixture: ComponentFixture<ReclamationTabRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationTabRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationTabRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
