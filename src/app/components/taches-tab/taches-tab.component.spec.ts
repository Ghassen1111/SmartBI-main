import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesTabComponent } from './taches-tab.component';

describe('TachesTabComponent', () => {
  let component: TachesTabComponent;
  let fixture: ComponentFixture<TachesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
