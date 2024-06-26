import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { EmployeeMainComponent } from './employee-content/employee-main/employee-main.component';
import { EmployeeAddComponent } from './employee-content/employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-content/employee-details/employee-details.component';
import { EmployeeSearchComponent } from './employee-content/employee-search/employee-search.component';
import { GenaratelettersComponent } from './genarateletters/genarateletters.component';
import { TemplatesComponent } from './templates/templates.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    DashHomeComponent,
    EmployeeMainComponent,
    EmployeeAddComponent,
    EmployeeDetailsComponent,
    EmployeeSearchComponent,
    GenaratelettersComponent,
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }
