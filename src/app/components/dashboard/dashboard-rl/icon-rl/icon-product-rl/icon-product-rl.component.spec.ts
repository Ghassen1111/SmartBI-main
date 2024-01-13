import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconProductRlComponent } from './icon-product-rl.component';

describe('IconProductRlComponent', () => {
  let component: IconProductRlComponent;
  let fixture: ComponentFixture<IconProductRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconProductRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconProductRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
