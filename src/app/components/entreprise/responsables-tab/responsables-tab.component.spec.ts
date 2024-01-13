import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablesTabComponent } from './responsables-tab.component';

describe('ResponsablesTabComponent', () => {
  let component: ResponsablesTabComponent;
  let fixture: ComponentFixture<ResponsablesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsablesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsablesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
