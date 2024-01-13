import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSalaireRfComponent } from './icon-salaire-rf.component';

describe('IconSalaireRfComponent', () => {
  let component: IconSalaireRfComponent;
  let fixture: ComponentFixture<IconSalaireRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSalaireRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSalaireRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
