import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusEmployeurRhComponent } from './chart-status-employeur-rh.component';

describe('ChartStatusEmployeurRhComponent', () => {
  let component: ChartStatusEmployeurRhComponent;
  let fixture: ComponentFixture<ChartStatusEmployeurRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStatusEmployeurRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusEmployeurRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
