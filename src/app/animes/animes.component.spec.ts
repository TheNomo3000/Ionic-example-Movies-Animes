import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesPage } from './animes.page';

describe('AnimesPage', () => {
  let component: AnimesPage;
  let fixture: ComponentFixture<AnimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
