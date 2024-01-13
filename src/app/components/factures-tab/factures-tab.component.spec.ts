import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesTabComponent } from './factures-tab.component';

describe('FacturesTabComponent', () => {
  let component: FacturesTabComponent;
  let fixture: ComponentFixture<FacturesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
