import { Injectable } from '@angular/core';
import { Catalog } from './catalog.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  [x: string]: any;
  formData: Catalog;
  list: Catalog[];

  constructor(private http: HttpClient, private api: ApiService) { }
  // postIntake(formData: Catalog) {
  //   return this.http.post(this.rootURL + '/INTAKE', formData);
  // }

  // putIntake(formData: Intake) {
  //   return this.http.put(this.rootURL + '/INTAKE' + formData.INTAKE_ID, formData);
  // }
  refreshList() {
    this.http.get(this.api.Url.catalog)
    .toPromise().then(res => this.list = res as Catalog[]);
  }

}
