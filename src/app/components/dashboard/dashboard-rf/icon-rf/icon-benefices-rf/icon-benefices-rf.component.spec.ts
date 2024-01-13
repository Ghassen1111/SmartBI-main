import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBeneficesRfComponent } from './icon-benefices-rf.component';

describe('IconBeneficesRfComponent', () => {
  let component: IconBeneficesRfComponent;
  let fixture: ComponentFixture<IconBeneficesRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconBeneficesRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBeneficesRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
