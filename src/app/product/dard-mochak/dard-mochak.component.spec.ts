import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DardMochakComponent } from './dard-mochak.component';

describe('DardMochakComponent', () => {
  let component: DardMochakComponent;
  let fixture: ComponentFixture<DardMochakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DardMochakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DardMochakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
