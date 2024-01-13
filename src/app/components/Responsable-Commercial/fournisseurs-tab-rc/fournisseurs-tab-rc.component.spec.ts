import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseursTabRcComponent } from './fournisseurs-tab-rc.component';

describe('FournisseursTabRcComponent', () => {
  let component: FournisseursTabRcComponent;
  let fixture: ComponentFixture<FournisseursTabRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseursTabRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseursTabRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
