import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexProblemComponent } from './sex-problem.component';

describe('SexProblemComponent', () => {
  let component: SexProblemComponent;
  let fixture: ComponentFixture<SexProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
