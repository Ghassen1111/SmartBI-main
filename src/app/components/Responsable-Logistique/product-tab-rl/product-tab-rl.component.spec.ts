import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabRlComponent } from './product-tab-rl.component';

describe('ProductTabRlComponent', () => {
  let component: ProductTabRlComponent;
  let fixture: ComponentFixture<ProductTabRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTabRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
