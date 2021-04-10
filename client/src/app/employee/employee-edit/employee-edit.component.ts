import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  currentEmployee!: Employee;
  employeeForm!: FormGroup;

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly toastr: ToastrService,
    private readonly active: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.employeeForm = this.employeeService.getEmployeeForm();
  }

  ngOnInit() {
    this.getEmployeeById(this.active.snapshot.params.id);
  }

  getEmployeeById(id: string) {
    this.employeeService.getEmployeeById(id).subscribe((res) => { 
      if (res) {
        this.employeeForm.patchValue(res);
      }
    })
  }

  submit() {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.active.snapshot.params.id, this.employeeForm.value).subscribe((res) => {
        this.toastr.success('Employee Edited!');
        this.router.navigate(['/']);
      }, () => {
        this.toastr.error('Something went wrong!');
      });
    }
  }

}
