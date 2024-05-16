import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZombilandiaAboutComponent } from './zombilandia-about.component';

describe('ZombilandiaAboutComponent', () => {
  let component: ZombilandiaAboutComponent;
  let fixture: ComponentFixture<ZombilandiaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZombilandiaAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZombilandiaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
