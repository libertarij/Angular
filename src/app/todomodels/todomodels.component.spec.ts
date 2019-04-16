import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomodelsComponent } from './todomodels.component';

describe('TodomodelsComponent', () => {
  let component: TodomodelsComponent;
  let fixture: ComponentFixture<TodomodelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodomodelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodomodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
