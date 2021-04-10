import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  employeeForm!: FormGroup;

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly toastr: ToastrService,
    private readonly router: Router,
  ) {
    this.employeeForm = this.employeeService.getEmployeeForm();
  }

  submit() {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployees(this.employeeForm.value).subscribe((res) => {
        this.toastr.success('Employee added!');
        this.router.navigate(['/']);
      }, () => {
        this.toastr.error('Something went wrong!');
      });
    }
  }

}
