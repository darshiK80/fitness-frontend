import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './trainer.component';
import {TrainerUserComponent} from "./trainer-user/trainer-user.component";
import {TrainerWorkoutComponent} from "./trainer-workout/trainer-workout.component";
import {TrainerMealComponent} from "./trainer-meal/trainer-meal.component";

const routes: Routes = [{
  path: '',
  component: TrainerComponent ,
    children:[
      {path:'meal',component:TrainerMealComponent},
      {path:'user',component:TrainerUserComponent},
      {path:'workout',component:TrainerWorkoutComponent}

    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
