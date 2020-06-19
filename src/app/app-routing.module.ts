import { ListTEchComponent } from './ListTEch/ListTEch.component';
import { TechComponent } from './Tech/Tech.component';
import { AuthGuard } from './auth.guard';
import { HomeCComponent } from './homeC/homeC.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { Edit_StudentComponent } from './Edit_Student/Edit_Student.component';
import { StudentDeatileComponent } from './Student-deatile/Student-deatile.component';
import { UserComponent } from './User/User.component';
import { Add_userComponent } from './add_user/add_user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'home', component: HomeCComponent , canActivate:[AuthGuard] ,children :[
  { path: 'user', component: UserComponent },
  { path: 'add_student', component: Add_userComponent },
  { path: 'addTech', component:TechComponent },
  { path: 'listTech', component:ListTEchComponent },

  { path: 'details', component: StudentDeatileComponent },
  { path: 'update', component: Edit_StudentComponent }]},
  { path: 'login', component: LoginCompComponent },
  { path: '', component: LoginCompComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
