import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSexeEmployeurRhComponent } from './chart-sexe-employeur-rh.component';

describe('ChartSexeEmployeurRhComponent', () => {
  let component: ChartSexeEmployeurRhComponent;
  let fixture: ComponentFixture<ChartSexeEmployeurRhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSexeEmployeurRhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSexeEmployeurRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
