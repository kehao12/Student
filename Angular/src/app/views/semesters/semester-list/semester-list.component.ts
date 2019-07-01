import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../../../shared/semester.service';
import { Semester } from '../../../shared/semester.model';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.scss']
})
export class SemesterListComponent implements OnInit {

  constructor(private service: SemesterService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(sem: Semester) {
    this.service.formData = Object.assign({}, sem);
    this.service.formDataI = Object.assign({}, sem);
  }


}
