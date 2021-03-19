import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairLoseComponent } from './hair-lose.component';

describe('HairLoseComponent', () => {
  let component: HairLoseComponent;
  let fixture: ComponentFixture<HairLoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairLoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
