import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasesListComponent } from './vases-list.component';

describe('VasesListComponent', () => {
  let component: VasesListComponent;
  let fixture: ComponentFixture<VasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
