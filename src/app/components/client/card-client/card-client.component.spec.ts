import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClientComponent } from './card-client.component';

describe('CardClientComponent', () => {
  let component: CardClientComponent;
  let fixture: ComponentFixture<CardClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
