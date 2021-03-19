import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecblogComponent } from './secblog.component';

describe('SecblogComponent', () => {
  let component: SecblogComponent;
  let fixture: ComponentFixture<SecblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
