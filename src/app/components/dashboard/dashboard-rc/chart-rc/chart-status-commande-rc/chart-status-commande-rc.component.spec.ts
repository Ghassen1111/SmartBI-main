import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusCommandeRcComponent } from './chart-status-commande-rc.component';

describe('ChartStatusCommandeRcComponent', () => {
  let component: ChartStatusCommandeRcComponent;
  let fixture: ComponentFixture<ChartStatusCommandeRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStatusCommandeRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusCommandeRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
