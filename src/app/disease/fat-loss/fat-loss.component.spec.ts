import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatLossComponent } from './fat-loss.component';

describe('FatLossComponent', () => {
  let component: FatLossComponent;
  let fixture: ComponentFixture<FatLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
