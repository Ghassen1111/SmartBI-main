import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClinetRcComponent } from './icon-clinet-rc.component';

describe('IconClinetRcComponent', () => {
  let component: IconClinetRcComponent;
  let fixture: ComponentFixture<IconClinetRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconClinetRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconClinetRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
