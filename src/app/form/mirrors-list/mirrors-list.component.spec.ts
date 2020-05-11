import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorsListComponent } from './mirrors-list.component';

describe('MirrorsListComponent', () => {
  let component: MirrorsListComponent;
  let fixture: ComponentFixture<MirrorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirrorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirrorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
