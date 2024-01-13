import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEntrepriseAdminComponent } from './icon-entreprise-admin.component';

describe('IconEntrepriseAdminComponent', () => {
  let component: IconEntrepriseAdminComponent;
  let fixture: ComponentFixture<IconEntrepriseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconEntrepriseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEntrepriseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
