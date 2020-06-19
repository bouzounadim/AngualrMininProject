/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetaillesComponent } from './Detailles.component';

describe('DetaillesComponent', () => {
  let component: DetaillesComponent;
  let fixture: ComponentFixture<DetaillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
