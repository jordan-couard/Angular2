import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Routing
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../routes/app-routing.module';

// Import External Modules
import { MomentModule } from 'angular2-moment';

// Import Intern Components
import { AppComponent } from './app.component';

// Import Crud Service
import { CrudService } from '../services/crud/crud.service';

// Import Controllers
import { ActivitiesCtrl } from '../interfaces/activities/activities.controller';
import { ActivityCtrl } from '../interfaces/activities/activity/activity.controller';

import { PeoplesCtrl } from '../interfaces/peoples/peoples.controller';


// Import Http Service
import { HttpService } from '../services/http/http.service';

// Filters Modules
import { FormatDate, ReversePipe } from '../helpers/filters/date.filter';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MomentModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ActivitiesCtrl,
    ActivityCtrl,
    PeoplesCtrl,
    FormatDate,
    ReversePipe
  ],
  providers: [ CrudService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
