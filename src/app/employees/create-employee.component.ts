import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  // isActive = true;
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'HR'},
    {id: 4, name: 'Admin'}
  ];
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };
  constructor() { }

  ngOnInit() {
  }
  saveEmployee(employee: Employee): void {
      console.log(employee);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
