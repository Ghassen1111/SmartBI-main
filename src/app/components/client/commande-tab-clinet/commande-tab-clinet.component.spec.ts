import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTabClinetComponent } from './commande-tab-clinet.component';

describe('CommandeTabClinetComponent', () => {
  let component: CommandeTabClinetComponent;
  let fixture: ComponentFixture<CommandeTabClinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeTabClinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeTabClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
