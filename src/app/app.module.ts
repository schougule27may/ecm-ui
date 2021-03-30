import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import {RouterModule} from '@angular/router';
// tslint:disable-next-line:import-spacing
import  {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { EmployeeFormsComponent } from './employee-forms/employee-forms.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    EmployeeComponent,
    TimesheetComponent,
    EmployeeFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ClientComponent},
      {path: 'client', component: ClientComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'employee/employee-form', component: EmployeeFormsComponent},
      {path: 'timesheet', component: TimesheetComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
