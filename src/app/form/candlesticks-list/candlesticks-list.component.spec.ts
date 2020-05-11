import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlesticksListComponent } from './candlesticks-list.component';

describe('CandlesticksListComponent', () => {
  let component: CandlesticksListComponent;
  let fixture: ComponentFixture<CandlesticksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandlesticksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlesticksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
