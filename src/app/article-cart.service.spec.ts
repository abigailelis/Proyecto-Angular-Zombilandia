import { TestBed } from '@angular/core/testing';

import { ArticleCartService } from './article-cart.service';

describe('ArticleCartService', () => {
  let service: ArticleCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
