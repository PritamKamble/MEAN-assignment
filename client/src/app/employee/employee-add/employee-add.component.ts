import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly employeeService: EmployeeService,
    private readonly toastr: ToastrService
  ) {
    this.buildForm();
  }

  buildForm() {
    this.employeeForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      phone: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: this.fb.group({
        city: [null],
        line1: [null],
        line2: [null],
        postalCode: [null],
      })
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployees(this.employeeForm.value).subscribe((res) => {
        this.toastr.success('Employee added!');
      }, () => {
        this.toastr.error('Something went wrong!');
      });
    }
  }

}
