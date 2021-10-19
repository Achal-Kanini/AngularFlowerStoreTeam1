import { TestBed } from '@angular/core/testing';

import { LoginServService } from './login-serv.service';

describe('LoginServService', () => {
  let service: LoginServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
