/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenaratelettersComponent } from './genarateletters.component';

describe('GenaratelettersComponent', () => {
  let component: GenaratelettersComponent;
  let fixture: ComponentFixture<GenaratelettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenaratelettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenaratelettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
