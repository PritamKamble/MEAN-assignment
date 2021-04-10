import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee.interface';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private readonly httpService: HttpService,
    private readonly fb: FormBuilder,
  ) { }

  getEmployeeForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: this.fb.group({
        city: [''],
        line1: [''],
        line2: [''],
        postalCode: [''],
      })
    });
  }

  getEmployees(search: string): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(`/employee?search=${search}`);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.httpService.get<Employee>(`/employee/${id}`);
  }

  createEmployees(body: Employee): Observable<Employee> {
    return this.httpService.post<Employee>(`/employee`, body);
  }

  updateEmployee(id: string, body: Employee): Observable<Employee> {
    return this.httpService.put<Employee>(`/employee/${id}`, body);
  }
}
