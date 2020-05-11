import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Under100Component } from './under100.component';

describe('Under100Component', () => {
  let component: Under100Component;
  let fixture: ComponentFixture<Under100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Under100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Under100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
