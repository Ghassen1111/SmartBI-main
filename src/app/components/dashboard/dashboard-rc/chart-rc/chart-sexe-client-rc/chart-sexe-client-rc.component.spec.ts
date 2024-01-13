import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSexeClientRcComponent } from './chart-sexe-client-rc.component';

describe('ChartSexeClientRcComponent', () => {
  let component: ChartSexeClientRcComponent;
  let fixture: ComponentFixture<ChartSexeClientRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSexeClientRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSexeClientRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
