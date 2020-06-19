/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTEchComponent } from './ListTEch.component';

describe('ListTEchComponent', () => {
  let component: ListTEchComponent;
  let fixture: ComponentFixture<ListTEchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTEchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTEchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
