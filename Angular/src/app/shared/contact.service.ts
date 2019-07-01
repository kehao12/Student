import { Injectable, ViewChild } from '@angular/core';
import { Contact } from './contact.model';
import { ModalDirective } from 'ngx-bootstrap';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;
  formData: Contact;
  formData1: Contact;
  formDataI: Contact;
  list: Contact[];
  @ViewChild('modal') modal: ModalDirective;

  constructor( private api: ApiService , private http: HttpClient) {  }
  showModal(event = null, obj: Contact ) {
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
  resetForm() {
    this.formData1 = {
      CONTACT_ID: null,
      STU_ID:   ' ',
      CELL_PHONE:   ' ',
      HOME_PHONE:   ' ',
      PHONE_MESS:   ' ',
      FATHER_NAME:   ' ',
      FATHER_PHONE:   ' ',
      FATHER_MAIL:   ' ',
      FATHER_WORKING:   ' ',
      FATHER_POSISION:   ' ',
      MOTHER_NAME:   ' ',
      MOTHER_PHONE:   ' ',
      MOTHER_WORKING:   ' ',
      MOTHER_POSISION:   ' ',
      MOTHER_MAIL:   ' ',
      SPON_NAME:   ' ',
      SPON_PHONE:   ' ',
      SPON_MAIL:   ' ',
      SPON_WORKING:   ' ',
      SPON_POSISION:   ' ',
  };
  }
  loadForm(id: string) {
    this.formData1 = {
      CONTACT_ID: 0,
      STU_ID: id,
      CELL_PHONE:   '',
      HOME_PHONE:   '',
      PHONE_MESS:   '',
      FATHER_NAME:   '',
      FATHER_PHONE:   '',
      FATHER_MAIL:   '',
      FATHER_WORKING:   '',
      FATHER_POSISION:   '',
      MOTHER_NAME:   '',
      MOTHER_PHONE:   '',
      MOTHER_WORKING:   '',
      MOTHER_POSISION:   '',
      MOTHER_MAIL:   '',
      SPON_NAME:   '',
      SPON_PHONE:   '',
      SPON_MAIL:   '',
      SPON_WORKING:   '',
      SPON_POSISION:   '',
  };
  }
  // checkCode(id: number, code: string): boolean {
  //   if ( this.list === null) { return true; }
  //     if ( code === '' || code === null) { return true; }
  //   for (const con of this.list) {
  //   if (con.CONTACT_ID.toLowerCase() === code.toLowerCase() && con.SEM_ID!=id) {
  //   return false;
  //   }
  //   }
  // return true;

showForm(id: string) {
  this.refreshList();
  if ( this.list === null) { this.resetForm(); return; }
  for (const con of this.list) {
       if (con.STU_ID === id) {
          this.formData1 = con;
       }
      }
}
  postCon(formData: Contact ) {
    return this.http.post(this.api.Url.contact, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.contact + '/')
    .toPromise().then(res => this.list = res as  Contact[] );
  }
  putCon(formData: Contact ) {
    return this.http.put(this.api.Url.contact + '/' + formData.CONTACT_ID, formData);
  }
}
