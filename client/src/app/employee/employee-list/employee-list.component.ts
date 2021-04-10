import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  isLoading = false;
  employees!: Employee[];

  constructor(
    private readonly employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(search: string = '') {
    this.isLoading = true;
    this.employeeService.getEmployees(search).subscribe((res) => {
      this.employees = res;
      this.isLoading = false;
    }, () => {
      this.employees = [];
      this.isLoading = false;
    });
  }

}
