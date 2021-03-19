import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshwagandhaCapsulesComponent } from './ashwagandha-capsules.component';

describe('AshwagandhaCapsulesComponent', () => {
  let component: AshwagandhaCapsulesComponent;
  let fixture: ComponentFixture<AshwagandhaCapsulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshwagandhaCapsulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshwagandhaCapsulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
