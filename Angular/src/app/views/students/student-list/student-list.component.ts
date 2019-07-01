import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { StudentService } from '../../../shared/student.service';
import { ContactService } from '../../../shared/contact.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentService, private Contact: ContactService) {
   }
   ngOnInit() {
    this.service.refresh();
    this.service.refreshList();
  }

}
