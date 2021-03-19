import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecdiseaseComponent } from './secdisease.component';

describe('SecdiseaseComponent', () => {
  let component: SecdiseaseComponent;
  let fixture: ComponentFixture<SecdiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
