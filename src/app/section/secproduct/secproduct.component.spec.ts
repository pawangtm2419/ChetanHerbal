import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecproductComponent } from './secproduct.component';

describe('SecproductComponent', () => {
  let component: SecproductComponent;
  let fixture: ComponentFixture<SecproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
