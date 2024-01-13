import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconQtyProductReclamationRtComponent } from './icon-qty-product-reclamation-rt.component';

describe('IconQtyProductReclamationRtComponent', () => {
  let component: IconQtyProductReclamationRtComponent;
  let fixture: ComponentFixture<IconQtyProductReclamationRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconQtyProductReclamationRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconQtyProductReclamationRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
