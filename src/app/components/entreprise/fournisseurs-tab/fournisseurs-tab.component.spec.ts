import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseursTabComponent } from './fournisseurs-tab.component';

describe('FournisseursTabComponent', () => {
  let component: FournisseursTabComponent;
  let fixture: ComponentFixture<FournisseursTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseursTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseursTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
