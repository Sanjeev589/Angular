import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsearcheddataComponent } from './showsearcheddata.component';

describe('ShowsearcheddataComponent', () => {
  let component: ShowsearcheddataComponent;
  let fixture: ComponentFixture<ShowsearcheddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsearcheddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsearcheddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
