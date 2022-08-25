import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
// import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
//   {path:"home",component:HomeComponent},
//   {path:"register",component:RegisterComponent}
// ];


@NgModule({
  declarations: [
    MainComponent,
    RegisterComponent,
    EmployeeListComponent,
    UpdateComponent,
    ViewComponent
  ],

  exports: [
    MainComponent,RegisterComponent,EmployeeListComponent, UpdateComponent,
    ViewComponent
  ],

  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
    // RouterModule,RouterModule.forRoot(routes)
  ]
})
export class Ess1Module { }
