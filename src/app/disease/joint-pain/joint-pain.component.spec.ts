import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JointPainComponent } from './joint-pain.component';

describe('JointPainComponent', () => {
  let component: JointPainComponent;
  let fixture: ComponentFixture<JointPainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JointPainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JointPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
