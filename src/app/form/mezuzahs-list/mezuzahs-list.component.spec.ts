import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezuzahsListComponent } from './mezuzahs-list.component';

describe('MezuzahsListComponent', () => {
  let component: MezuzahsListComponent;
  let fixture: ComponentFixture<MezuzahsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezuzahsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezuzahsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
