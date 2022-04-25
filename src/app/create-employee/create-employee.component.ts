import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  showMsg: String = '';

  constructor(private employeeService: EmployeeService,
    private router: Router) { }
    

  ngOnInit(){
 }
  
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      alert("employee details saved successfully");
    },
    error => console.log(error));
  }


  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
