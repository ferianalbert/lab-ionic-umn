import { TestBed } from '@angular/core/testing';

import { FavoritesServiceService } from './favorites-service.service';

describe('FavoritesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesServiceService = TestBed.get(FavoritesServiceService);
    expect(service).toBeTruthy();
  });
});
