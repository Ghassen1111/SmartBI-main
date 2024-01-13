import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusReclamationRtComponent } from './chart-status-reclamation-rt.component';

describe('ChartStatusReclamationRtComponent', () => {
  let component: ChartStatusReclamationRtComponent;
  let fixture: ComponentFixture<ChartStatusReclamationRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStatusReclamationRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusReclamationRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
