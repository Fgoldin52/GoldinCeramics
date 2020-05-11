import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Over500Component } from './over500.component';

describe('Over500Component', () => {
  let component: Over500Component;
  let fixture: ComponentFixture<Over500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Over500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Over500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
