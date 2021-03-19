import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecsliderComponent } from './secslider.component';

describe('SecsliderComponent', () => {
  let component: SecsliderComponent;
  let fixture: ComponentFixture<SecsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
