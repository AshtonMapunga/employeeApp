import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/employ";

  constructor(private httpclient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.baseUrl}/findAll`)
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>(`${this.baseUrl}/add`,employee)
  }

  public UpdateEmployee(id:number, employee: Employee): Observable<Employee> {
    return this.httpclient.put<Employee>(`${this.baseUrl}/update/${id}`,employee)
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  public getEmployeeById(id: number): Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.baseUrl}/find/${id}`);
  }



}
