import { Component, OnInit } from '@angular/core';
import { TypestudentService } from '../../../shared/typestudent.service';
import { Typestudent } from '../../../shared/typestudent.model';


@Component({
  selector: 'app-type-student-list',
  templateUrl: './type-student-list.component.html',
  styleUrls: ['./type-student-list.component.scss']
})
export class TypeStudentListComponent implements OnInit {

  constructor(private service: TypestudentService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
