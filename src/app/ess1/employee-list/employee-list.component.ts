import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { ServiceService } from 'src/app/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[];



  constructor(private employeeService:  ServiceService,
     private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployee().subscribe(data => {
      this.employees = data;
    });

    
  }

  // public getEmployees(): void {
  //   this.employeeService.getEmployee().subscribe(
  //     (response: Employee[]) => {
  //       this.employees = response;
  //       console.log(this.employees);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }



  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate([`update-employee`, id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }

}
