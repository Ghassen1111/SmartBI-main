import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamationClinetComponent } from './add-reclamation-clinet.component';

describe('AddReclamationClinetComponent', () => {
  let component: AddReclamationClinetComponent;
  let fixture: ComponentFixture<AddReclamationClinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReclamationClinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReclamationClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
