import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStockRlComponent } from './icon-stock-rl.component';

describe('IconStockRlComponent', () => {
  let component: IconStockRlComponent;
  let fixture: ComponentFixture<IconStockRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconStockRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStockRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
