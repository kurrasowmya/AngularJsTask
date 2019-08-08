import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2componentComponent } from './child2component.component';

describe('Child2componentComponent', () => {
  let component: Child2componentComponent;
  let fixture: ComponentFixture<Child2componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
