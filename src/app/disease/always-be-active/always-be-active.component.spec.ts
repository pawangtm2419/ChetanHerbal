import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysBeActiveComponent } from './always-be-active.component';

describe('AlwaysBeActiveComponent', () => {
  let component: AlwaysBeActiveComponent;
  let fixture: ComponentFixture<AlwaysBeActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlwaysBeActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysBeActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
