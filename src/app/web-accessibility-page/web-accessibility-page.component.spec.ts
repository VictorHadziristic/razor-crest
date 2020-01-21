import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAccessibilityPageComponent } from './web-accessibility-page.component';

describe('WebAccessibilityPageComponent', () => {
  let component: WebAccessibilityPageComponent;
  let fixture: ComponentFixture<WebAccessibilityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAccessibilityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAccessibilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
