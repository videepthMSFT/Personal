import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
