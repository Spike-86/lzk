import { TestBed, inject } from '@angular/core/testing';

import { Lazuk } from './lazuk';

describe('Lazuk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lazuk]
    });
  });

  it('should be created', inject([Lazuk], (service: Lazuk) => {
    expect(service).toBeTruthy();
  }));
});
