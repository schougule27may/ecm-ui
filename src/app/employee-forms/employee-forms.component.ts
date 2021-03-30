import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EmployeeService} from '../employee-service';

@Component({
  selector: 'app-employee-forms',
  templateUrl: './employee-forms.component.html',
  styleUrls: ['./employee-forms.component.css']
})
export class EmployeeFormsComponent implements OnInit {


  constructor(private employeeService: EmployeeService,
              private formBuilder: FormBuilder)
              { }
  employeeForm = this.formBuilder.group({
    firstName: '',
    lastName: ''
  });

  ngOnInit(): void {
  }
  onSubmit() : void{
    console.log('values', this.employeeForm.value);
    this.employeeService.addEmployee(this.employeeForm.value);
  }


}
