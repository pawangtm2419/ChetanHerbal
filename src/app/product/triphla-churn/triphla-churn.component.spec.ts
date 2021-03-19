import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriphlaChurnComponent } from './triphla-churn.component';

describe('TriphlaChurnComponent', () => {
  let component: TriphlaChurnComponent;
  let fixture: ComponentFixture<TriphlaChurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriphlaChurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriphlaChurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
