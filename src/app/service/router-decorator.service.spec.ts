import { TestBed } from '@angular/core/testing';

import { RouterDecoratorService } from './router-decorator.service';

describe('RouterDecoratorService', () => {
  let service: RouterDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
