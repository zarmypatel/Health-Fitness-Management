import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SigninComponent } from './login/signin/signin.component';
import { RegisterComponent } from './login/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaterIntakeComponent } from './home/water-intake/water-intake.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import { BmiComponent } from './tool/bmi/bmi.component';
import { IdealWeightComponent } from './tool/ideal-weight/ideal-weight.component';
import { BodyFatComponent } from './tool/body-fat/body-fat.component';
import { ProfileTComponent } from './trainer/profile-t/profile-t.component';
import { ListComponent } from './trainer/list/list.component';
import { SleepManagementComponent } from './home/sleep-management/sleep-management.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './profile/edit/edit.component';
import { ChangePassComponent } from './profile/change-pass/change-pass.component';
import { ProfileDComponent } from './profile/profile-d/profile-d.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TrainerComponent,
    SigninComponent,
    RegisterComponent,
    WaterIntakeComponent,
    DashboardComponent,
    ToolComponent,
    BmiComponent,
    IdealWeightComponent,
    BodyFatComponent,
    ProfileTComponent,
    ListComponent,
    SleepManagementComponent,
    ProfileComponent,
    EditComponent,
    ChangePassComponent,
    ProfileDComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
