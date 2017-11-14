import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesCtrl } from '../interfaces/activities/activities.controller';
import { ActivityCtrl } from '../interfaces/activities/activity/activity.controller';
import { PeoplesCtrl } from '../interfaces/peoples/peoples.controller';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'activities', component: ActivitiesCtrl },
  { path: 'activity/:id', component: ActivityCtrl },
  { path: 'peoples', component: PeoplesCtrl }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
    
  })
export class AppRoutingModule { }