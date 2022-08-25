import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private httpcli: HttpClient) { }

  getEmployee(): Observable<Employee[]>{

    return this.httpcli.get<Employee[]>(`${this.apiServerUrl}/api/saveemployee`);
  }

  saveEmployee(employee: Employee): Observable<any>{
  
    return this.httpcli.post<Employee>(`${this.apiServerUrl}/api/saveemployee`,employee);

  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpcli.get<Employee>(`${this.apiServerUrl}/api/saveemployee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpcli.put<Employee>(`${this.apiServerUrl}/api/saveemployee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpcli.delete<Employee>(`${this.apiServerUrl}/api/saveemployee/${id}`);
  }


}
