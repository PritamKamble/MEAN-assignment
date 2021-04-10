import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private readonly http: HttpClient
  ) { }

  get<T>(path: string) {
    return this.http.get<T>(`${environment.hostURL}${path}`);
  }
}
