import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SehatPrashComponent } from './sehat-prash.component';

describe('SehatPrashComponent', () => {
  let component: SehatPrashComponent;
  let fixture: ComponentFixture<SehatPrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SehatPrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SehatPrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
