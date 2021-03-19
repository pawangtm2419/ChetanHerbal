import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhaMochakComponent } from './mha-mochak.component';

describe('MhaMochakComponent', () => {
  let component: MhaMochakComponent;
  let fixture: ComponentFixture<MhaMochakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhaMochakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhaMochakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
