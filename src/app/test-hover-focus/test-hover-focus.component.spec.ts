import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHoverFocusComponent } from './test-hover-focus.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestHoverFocusComponent', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHoverFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
