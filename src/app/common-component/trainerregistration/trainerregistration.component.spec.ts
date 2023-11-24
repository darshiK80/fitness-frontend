import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerregistrationComponent } from './trainerregistration.component';

describe('TrainerregistrationComponent', () => {
  let component: TrainerregistrationComponent;
  let fixture: ComponentFixture<TrainerregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainerregistrationComponent]
    });
    fixture = TestBed.createComponent(TrainerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
