import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightUpComponent } from './height-up.component';

describe('HeightUpComponent', () => {
  let component: HeightUpComponent;
  let fixture: ComponentFixture<HeightUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
