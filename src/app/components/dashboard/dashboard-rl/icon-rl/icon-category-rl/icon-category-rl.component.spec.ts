import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCategoryRlComponent } from './icon-category-rl.component';

describe('IconCategoryRlComponent', () => {
  let component: IconCategoryRlComponent;
  let fixture: ComponentFixture<IconCategoryRlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCategoryRlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCategoryRlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
