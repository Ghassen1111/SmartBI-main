import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesTabEfComponent } from './factures-tab-ef.component';

describe('FacturesTabEfComponent', () => {
  let component: FacturesTabEfComponent;
  let fixture: ComponentFixture<FacturesTabEfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturesTabEfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesTabEfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
