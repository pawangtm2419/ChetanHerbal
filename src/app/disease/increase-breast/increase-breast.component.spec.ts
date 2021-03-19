import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseBreastComponent } from './increase-breast.component';

describe('IncreaseBreastComponent', () => {
  let component: IncreaseBreastComponent;
  let fixture: ComponentFixture<IncreaseBreastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseBreastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseBreastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
