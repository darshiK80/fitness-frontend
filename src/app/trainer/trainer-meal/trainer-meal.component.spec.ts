import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerMealComponent } from './trainer-meal.component';

describe('TrainerMealComponent', () => {
  let component: TrainerMealComponent;
  let fixture: ComponentFixture<TrainerMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerMealComponent]
    });
    fixture = TestBed.createComponent(TrainerMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
