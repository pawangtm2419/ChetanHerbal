import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetanCapsuleComponent } from './chetan-capsule.component';

describe('ChetanCapsuleComponent', () => {
  let component: ChetanCapsuleComponent;
  let fixture: ComponentFixture<ChetanCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChetanCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChetanCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
