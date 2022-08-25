import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { ServiceService } from 'src/app/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   employeesave: Employee = new Employee();

   private apiServerUrl = environment.apiBaseUrl;


  constructor(private empServ: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  // createEmployee(){
  //   this.empServ.saveEmployee(this.employeesave).subscribe( data =>{
  //     console.log(data);
  //      this.goToEmployeeList();
  //   },
  //   error => console.log(error));
   
  // }

  public createEmployee(addForm: NgForm): void {
    document.getElementById('btn').click();
    this.empServ.saveEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.goToEmployeeList();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  goToEmployeeList(){
    this.router.navigate(['list']);
  }

   onSubmit(){
    console.log(this.employeesave);

    this.createEmployee;
   }

}
