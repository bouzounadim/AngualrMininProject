/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TechServiceService } from './TechService.service';

describe('Service: TechService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechServiceService]
    });
  });

  it('should ...', inject([TechServiceService], (service: TechServiceService) => {
    expect(service).toBeTruthy();
  }));
});
