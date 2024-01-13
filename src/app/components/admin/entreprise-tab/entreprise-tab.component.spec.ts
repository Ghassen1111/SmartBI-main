import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseTabComponent } from './entreprise-tab.component';

describe('EntrepriseTabComponent', () => {
  let component: EntrepriseTabComponent;
  let fixture: ComponentFixture<EntrepriseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
