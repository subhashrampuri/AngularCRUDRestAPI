import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Pawan Kalyan',
      gender: 'Male',
      email: 'pawan@jsena.com',
      phoneNumber: 9845114127,
      contactPreference: 'Email',
      dateOfBirth: new Date('01/05/1983'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/pawan.jpg'
    },
    {
      id: 2,
      name: 'Anushka Shetty',
      gender: 'Female',
      contactPreference: 'Phone',
      email: 'anushka@sweet.com',
      phoneNumber: 9972085600,
      dateOfBirth: new Date('01/03/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/anushka.jpg'
    },
    {
      id: 3,
      name: 'Prabhas Raju',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 21026261,
      dateOfBirth: new Date('01/10/1979'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/prabhas.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
