import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AssignMealComponent} from "./assign-meal/assign-meal.component";

@Component({
  selector: 'app-trainer-meal',
  templateUrl: './trainer-meal.component.html',
  styleUrls: ['./trainer-meal.component.css']
})
export class TrainerMealComponent {
  mealList: any;



  displayedColumns: string[] = [
    'Id',
    'Name',
    'FoodList'


  ];
  constructor(public dialog: MatDialog) {

  }

  public assignMeal(element:any){
    const dialogRef = this.dialog.open(AssignMealComponent, {
      width: '40%',
      data: element,
    });
    return dialogRef.afterClosed();
  }





}
