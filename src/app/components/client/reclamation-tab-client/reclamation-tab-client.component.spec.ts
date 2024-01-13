import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTabClientComponent } from './reclamation-tab-client.component';

describe('ReclamationTabClientComponent', () => {
  let component: ReclamationTabClientComponent;
  let fixture: ComponentFixture<ReclamationTabClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationTabClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationTabClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
