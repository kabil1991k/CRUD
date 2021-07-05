import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from '../employe';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
 getEmployees(data :any) : Observable<Employee[]>
 {
   return this.http.post<Employee[]>('http://localhost/API/api.php',data)
  
 }
 getData(): Observable<Employee[]>
 {
return this.http.get<Employee[]>('http://localhost/API/api.php')
 }
  
}
