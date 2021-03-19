import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneProblemComponent } from './stone-problem.component';

describe('StoneProblemComponent', () => {
  let component: StoneProblemComponent;
  let fixture: ComponentFixture<StoneProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
