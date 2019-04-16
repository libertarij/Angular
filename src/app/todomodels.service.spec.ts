import { TestBed } from '@angular/core/testing';

import { TodomodelsService } from './todomodels.service';

describe('TodomodelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodomodelsService = TestBed.get(TodomodelsService);
    expect(service).toBeTruthy();
  });
});
