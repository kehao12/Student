import { Injectable, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { ModalDirective } from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;
  formDataI: User;

  [x: string]: any;
  list: User[];
  REPASSWORD: string;
  @ViewChild('modal') modal: ModalDirective;
  constructor( private api: ApiService , private http: HttpClient) {  }
  resetForm() {
    this.formData = {
      USERNAME: '',
      PASSWORD: '',
      LAST_NAME: '',
      FIRST_NAME: '',
      BIRTH_DAY: null,
      GENDER: 0,
      PHONE: '',
      EMAIL: '',
      ADDRESS: '',
      STATUS: 1
    };
    this.REPASSWORD = '';
  }
  showModal(event = null, obj: User ) {
    if (event != null) {
      event.preventDefault();
    }
    if (obj != null) {
      this.formData = Object.assign({}, obj);
      this.formDataI = obj;
    } else {
      this.resetForm();
    }
    this.modal.show();
  }
  postUser(formData: User ) {
    return this.http.post(this.api.Url.user, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.user + '/')
    .toPromise().then(res => this.list = res as  User[] );
  }
  putUser(formData: User ) {
    return this.http.put(this.api.Url.user + '/' + formData.USERNAME, formData);
  }

  checkCode(code: string): boolean {
      if (this.list === null) { return true; }
      if (code === '' || code === null) { return true; }
      for (const user of this.list) {
        if (user.USERNAME.toLowerCase() === code.toLowerCase()) {
          return false;
        }
      }
      return true;
    }

}
