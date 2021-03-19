import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrulivComponent } from './truliv.component';

describe('TrulivComponent', () => {
  let component: TrulivComponent;
  let fixture: ComponentFixture<TrulivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrulivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrulivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
