/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { User_serviceService } from './user_service.service';

describe('Service: User_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User_serviceService]
    });
  });

  it('should ...', inject([User_serviceService], (service: User_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
