import { TestBed } from '@angular/core/testing';

import { PhotolinkService } from './photolink.service';

describe('PhotolinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotolinkService = TestBed.get(PhotolinkService);
    expect(service).toBeTruthy();
  });
});
