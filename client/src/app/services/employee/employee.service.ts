import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/interfaces/employee.interface';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private readonly httpService: HttpService
  ) { }

  getEmployees(search: string): Observable<Employee[]> {
    return this.httpService.get<Employee[]>(`/employee?search=${search}`);
  }
}
