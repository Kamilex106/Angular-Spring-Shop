import { TestBed } from '@angular/core/testing';

import { KamShopFormService } from './kam-shop-form.service';

describe('KamShopFormService', () => {
  let service: KamShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KamShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
