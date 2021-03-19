import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShilajitPrashComponent } from './shilajit-prash.component';

describe('ShilajitPrashComponent', () => {
  let component: ShilajitPrashComponent;
  let fixture: ComponentFixture<ShilajitPrashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShilajitPrashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShilajitPrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
