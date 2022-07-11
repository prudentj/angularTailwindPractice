import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPracticeAppletonComponent } from './first-practice-appleton.component';

describe('FirstPracticeAppletonComponent', () => {
  let component: FirstPracticeAppletonComponent;
  let fixture: ComponentFixture<FirstPracticeAppletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPracticeAppletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPracticeAppletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
