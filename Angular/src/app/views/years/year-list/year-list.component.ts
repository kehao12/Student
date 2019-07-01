import { Component, OnInit } from '@angular/core';
import { YearService } from '../../../shared/year.service';
import { Year } from '../../../shared/year.model';

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.scss']
})
export class YearListComponent implements OnInit {

  constructor(private service: YearService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(year: Year) {
    this.service.formData = Object.assign({}, year);
    this.service.formDataI = Object.assign({}, year);
  }

}
