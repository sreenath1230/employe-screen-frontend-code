import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8090/employees";

  constructor(private httpClient: HttpClient) { }
  
 

  createEmployee(employee: Employee): Observable<Object>{
    console.log("employee", employee);
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

}
