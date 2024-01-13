import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabElComponent } from './product-tab-el.component';

describe('ProductTabElComponent', () => {
  let component: ProductTabElComponent;
  let fixture: ComponentFixture<ProductTabElComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTabElComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
