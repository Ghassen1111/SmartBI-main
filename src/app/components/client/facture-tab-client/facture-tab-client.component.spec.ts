import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureTabClientComponent } from './facture-tab-client.component';

describe('FactureTabClientComponent', () => {
  let component: FactureTabClientComponent;
  let fixture: ComponentFixture<FactureTabClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureTabClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureTabClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
