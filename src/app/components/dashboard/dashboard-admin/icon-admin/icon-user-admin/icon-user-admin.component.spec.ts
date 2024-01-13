import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconUserAdminComponent } from './icon-user-admin.component';

describe('IconUserAdminComponent', () => {
  let component: IconUserAdminComponent;
  let fixture: ComponentFixture<IconUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
