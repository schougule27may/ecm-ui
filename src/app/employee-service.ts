import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Employee} from './employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  getEmployees () {
    return this.http.get<Employee[]>('http://localhost:7979/employees');
  }

  addEmployee (employee : any) {
    this.http.post<any> ('http://localhost:7979/employee', employee).subscribe(data => {
      console.log(data.firstName);
    })
  }
}
