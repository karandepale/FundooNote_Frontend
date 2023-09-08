import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'Register' , component:RegisterComponent},
  {path:'Dashboard' , component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
