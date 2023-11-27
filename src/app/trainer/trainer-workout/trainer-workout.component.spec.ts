import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerWorkoutComponent } from './trainer-workout.component';

describe('TrainerWorkoutComponent', () => {
  let component: TrainerWorkoutComponent;
  let fixture: ComponentFixture<TrainerWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerWorkoutComponent]
    });
    fixture = TestBed.createComponent(TrainerWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
