import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesTabRcComponent } from './commandes-tab-rc.component';

describe('CommandesTabRcComponent', () => {
  let component: CommandesTabRcComponent;
  let fixture: ComponentFixture<CommandesTabRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesTabRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesTabRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
