import { TestBed } from '@angular/core/testing';

import { CoffeeApi } from './coffee-api';

describe('CoffeeApi', () => {
  let service: CoffeeApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
