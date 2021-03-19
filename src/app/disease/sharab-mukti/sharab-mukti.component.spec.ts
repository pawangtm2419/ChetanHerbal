import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharabMuktiComponent } from './sharab-mukti.component';

describe('SharabMuktiComponent', () => {
  let component: SharabMuktiComponent;
  let fixture: ComponentFixture<SharabMuktiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharabMuktiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharabMuktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
