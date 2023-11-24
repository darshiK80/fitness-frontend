import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./common-component/login/login.component";
import {UserregistrationComponent} from "./common-component/userregistration/userregistration.component";
import {TrainerregistrationComponent} from "./common-component/trainerregistration/trainerregistration.component";
import {AdminregistrationComponent} from "./common-component/adminregistration/adminregistration.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:UserregistrationComponent},
  {path:'trainer-registration',component:TrainerregistrationComponent},
  {path:'admin-registration',component:AdminregistrationComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'trainer', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
