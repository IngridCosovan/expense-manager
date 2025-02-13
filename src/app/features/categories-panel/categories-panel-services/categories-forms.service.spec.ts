import { TestBed } from '@angular/core/testing';

import { CategoriesFormsService } from './categories-forms.service';

describe('CategoriesFormsService', () => {
  let service: CategoriesFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
