import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerComponent } from './trainer.component';
import { TrainerMealComponent } from './trainer-meal/trainer-meal.component';
import { TrainerUserComponent } from './trainer-user/trainer-user.component';
import { TrainerWorkoutComponent } from './trainer-workout/trainer-workout.component';
import { AssignMealComponent } from './trainer-meal/assign-meal/assign-meal.component';
import { AddCommentComponent } from './trainer-user/add-comment/add-comment.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {AppModule} from "../app.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TrainerComponent,
    TrainerMealComponent,
    TrainerUserComponent,
    TrainerWorkoutComponent,
    AssignMealComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class TrainerModule { }
