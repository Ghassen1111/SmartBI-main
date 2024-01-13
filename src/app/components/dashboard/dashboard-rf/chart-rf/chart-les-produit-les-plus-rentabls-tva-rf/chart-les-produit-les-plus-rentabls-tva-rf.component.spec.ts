import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLesProduitLesPlusRentablsTvaRfComponent } from './chart-les-produit-les-plus-rentabls-tva-rf.component';

describe('ChartLesProduitLesPlusRentablsTvaRfComponent', () => {
  let component: ChartLesProduitLesPlusRentablsTvaRfComponent;
  let fixture: ComponentFixture<ChartLesProduitLesPlusRentablsTvaRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLesProduitLesPlusRentablsTvaRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLesProduitLesPlusRentablsTvaRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
