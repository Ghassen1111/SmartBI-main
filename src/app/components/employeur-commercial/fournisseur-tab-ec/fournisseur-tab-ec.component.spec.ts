import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurTabEcComponent } from './fournisseur-tab-ec.component';

describe('FournisseurTabEcComponent', () => {
  let component: FournisseurTabEcComponent;
  let fixture: ComponentFixture<FournisseurTabEcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurTabEcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurTabEcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
