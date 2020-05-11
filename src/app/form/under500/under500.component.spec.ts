import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Under500Component } from './under500.component';

describe('Under500Component', () => {
  let component: Under500Component;
  let fixture: ComponentFixture<Under500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Under500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Under500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
