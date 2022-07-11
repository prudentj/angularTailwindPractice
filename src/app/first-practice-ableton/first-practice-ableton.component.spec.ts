import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPracticeAbletonComponent } from './first-practice-ableton.component';

describe('FirstPracticeAbletonComponent', () => {
  let component: FirstPracticeAbletonComponent;
  let fixture: ComponentFixture<FirstPracticeAbletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPracticeAbletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPracticeAbletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
