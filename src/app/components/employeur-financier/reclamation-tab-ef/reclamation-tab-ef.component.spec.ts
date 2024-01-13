import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTabEfComponent } from './reclamation-tab-ef.component';

describe('ReclamationTabEfComponent', () => {
  let component: ReclamationTabEfComponent;
  let fixture: ComponentFixture<ReclamationTabEfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationTabEfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationTabEfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
