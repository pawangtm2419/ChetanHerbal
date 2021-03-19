import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetanTilaComponent } from './chetan-tila.component';

describe('ChetanTilaComponent', () => {
  let component: ChetanTilaComponent;
  let fixture: ComponentFixture<ChetanTilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChetanTilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChetanTilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
