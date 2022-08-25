import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ess1Module } from './ess1/ess1.module';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './ess1/register/register.component';
import { MainComponent } from './ess1/main/main.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './ess1/employee-list/employee-list.component';
import { UpdateComponent } from './ess1/update/update.component';
import { ViewComponent } from './ess1/view/view.component';


const routes: Routes = [
  {path:"homepage",component:HomeComponent},
  {path:"main",component:MainComponent},
  {path:"reg",component:RegisterComponent},
  {path:"list",component:EmployeeListComponent},
  {path: 'update-employee/:id', component: UpdateComponent},
  {path: 'employee-details/:id', component: ViewComponent},
  {path:"",redirectTo:'homepage',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],

  exports: [
    AppRoutingModule
  ],

  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule, Ess1Module,MatToolbarModule,
    MatButtonModule,NgbModule,RouterModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
