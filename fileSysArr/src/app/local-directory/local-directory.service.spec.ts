import { TestBed } from '@angular/core/testing';

import { LocalDirectoryService } from './local-directory.service';

describe('LocalDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({

  }));

  it('should be created', () => {
    const service: LocalDirectoryService = TestBed.get(LocalDirectoryService);
    expect(service).toBeTruthy();
  });
  
});
