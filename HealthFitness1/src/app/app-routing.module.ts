import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SigninComponent } from './login/signin/signin.component';
import { RegisterComponent } from './login/register/register.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { WaterIntakeComponent } from './home/water-intake/water-intake.component';
import { ToolComponent } from './tool/tool.component';
import { BmiComponent } from './tool/bmi/bmi.component';
import { IdealWeightComponent } from './tool/ideal-weight/ideal-weight.component';
import { BodyFatComponent } from './tool/body-fat/body-fat.component';
import { ListComponent } from './trainer/list/list.component';
import { ProfileTComponent } from './trainer/profile-t/profile-t.component';
import { SleepManagementComponent } from './home/sleep-management/sleep-management.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDComponent } from './profile/profile-d/profile-d.component';
import { EditComponent } from './profile/edit/edit.component';
import { ChangePassComponent } from './profile/change-pass/change-pass.component';

const routes: Routes = [
  {path:"" ,redirectTo:"login" ,pathMatch:"full" },
  {path:"login", component:LoginComponent,children:[
    {
      path:"",
      redirectTo:"signin",
      pathMatch:"full"
    },
    {
      path:"signin",
      component:SigninComponent,
      // outlet:"login"
    },
    {
      path:"register",
      component:RegisterComponent,
      // outlet:"login"
    }
  ]},
  {path:"home",component:HomeComponent,children:[
    {
      path:"",
      redirectTo:"dashboard",
      pathMatch:"full"
    },
    {
      path:"dashboard",
      component:DashboardComponent
    },
    {
      path:"waterIntake",
      component:WaterIntakeComponent
    },
    {
      path:"sleepManagement",
      component:SleepManagementComponent
    }
  ]},
  {path:"trainer",component:TrainerComponent,children:[
    {
      path:"",
      redirectTo:"list",
      pathMatch:"full"
    },
    {
      path:"list",
      component:ListComponent
    },
    {
      path:"profileT",
      component:ProfileTComponent
    }
  ]},
  {path:"tool",component:ToolComponent,children:[
    {
      path:"bmi",
      component:BmiComponent
    },
    {
      path:"idealWeight",
      component:IdealWeightComponent
    },
    {
      path:"bodyFat",
      component:BodyFatComponent
    }
  ]},
  {path:"profile",component:ProfileComponent,children:[
    {
      path:"",
      redirectTo:"profileD",
      pathMatch:"full"
    },
    {
      path:"profileD",
      component:ProfileDComponent
    },
    {
      path:"edit",
      component:EditComponent
    },
    {
      path:"changePass",
      component:ChangePassComponent
    }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [SigninComponent,RegisterComponent]