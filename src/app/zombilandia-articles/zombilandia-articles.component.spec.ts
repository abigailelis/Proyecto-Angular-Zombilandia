import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZombilandiaArticlesComponent } from './zombilandia-articles.component';

describe('ZombilandiaArticlesComponent', () => {
  let component: ZombilandiaArticlesComponent;
  let fixture: ComponentFixture<ZombilandiaArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZombilandiaArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZombilandiaArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
