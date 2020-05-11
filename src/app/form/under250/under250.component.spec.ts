import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Under250Component } from './under250.component';

describe('Under250Component', () => {
  let component: Under250Component;
  let fixture: ComponentFixture<Under250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Under250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Under250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
