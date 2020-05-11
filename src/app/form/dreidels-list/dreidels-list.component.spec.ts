import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreidelsListComponent } from './dreidels-list.component';

describe('DreidelsListComponent', () => {
  let component: DreidelsListComponent;
  let fixture: ComponentFixture<DreidelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreidelsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreidelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
