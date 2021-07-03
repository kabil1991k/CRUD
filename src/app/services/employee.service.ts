import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from '../employe';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _url :string = "./src/JSON/db.json";
  constructor(private http : HttpClient) { }
 getEmployees(data :any)
 {
   return this.http.post<any>('http://localhost/API/api.php',data)
  
 }
 getData(): Observable<Employee[]>
 {
return this.http.get<Employee[]>(this._url)
 }
  
}
