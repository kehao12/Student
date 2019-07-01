import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}
  baseurl = 'https://localhost:44388/api/';
  Url = {
    intake: this.baseurl + 'INTAKE',
    category: this.baseurl + 'CATELORY',
    catalog: this.baseurl + 'CATALOG',
    semester: this.baseurl + 'SEMESTER',
    year: this.baseurl + 'YEAR',
    student: this.baseurl + 'STUDENT',
    program: this.baseurl + 'PROGRAM',
    typestudent: this.baseurl + 'TYPE_STUDENT',
    branch: this.baseurl + 'BRANCH',
    user: this.baseurl + 'USER',
    contact: this.baseurl + 'CONTACT'

  };
}
