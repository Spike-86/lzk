import { TestBed, inject } from '@angular/core/testing';

import { GetItemsService } from './get-items.service';

describe('GetItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetItemsService]
    });
  });

  it('should be created', inject([GetItemsService], (service: GetItemsService) => {
    expect(service).toBeTruthy();
  }));
});
