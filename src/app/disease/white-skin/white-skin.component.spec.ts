import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteSkinComponent } from './white-skin.component';

describe('WhiteSkinComponent', () => {
  let component: WhiteSkinComponent;
  let fixture: ComponentFixture<WhiteSkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteSkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
