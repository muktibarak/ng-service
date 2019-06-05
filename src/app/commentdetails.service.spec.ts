import { TestBed } from '@angular/core/testing';

import { CommentdetailsService } from './commentdetails.service';

describe('CommentdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentdetailsService = TestBed.get(CommentdetailsService);
    expect(service).toBeTruthy();
  });
});
