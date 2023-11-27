import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerUserComponent } from './trainer-user.component';

describe('TrainerUserComponent', () => {
  let component: TrainerUserComponent;
  let fixture: ComponentFixture<TrainerUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerUserComponent]
    });
    fixture = TestBed.createComponent(TrainerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
