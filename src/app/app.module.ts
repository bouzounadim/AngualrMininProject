import { TechServiceService } from './services/TechService.service';
import { User_serviceService } from './services/user_service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './User/User.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MatSliderModule } from '@angular/material/slider';
import { Add_userComponent } from './add_user/add_user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StudentDeatileComponent } from './Student-deatile/Student-deatile.component';
import { Edit_StudentComponent } from './Edit_Student/Edit_Student.component';
import { DetaillesComponent } from './Detailles/Detailles.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { HomeCComponent } from './homeC/homeC.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TechComponent } from './Tech/Tech.component';
import { ListTEchComponent } from './ListTEch/ListTEch.component';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      Add_userComponent,
      StudentDeatileComponent,
      Edit_StudentComponent,
      DetaillesComponent,
      LoginCompComponent,
      HomeCComponent,
      TechComponent,
      ListTEchComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase),
      MatSliderModule,
      FormsModule,
      ReactiveFormsModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      AngularFireAuthModule
   ],
   providers: [
      User_serviceService,TechServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
