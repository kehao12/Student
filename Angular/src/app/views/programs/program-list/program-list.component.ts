import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../../shared/program.service';
import { Program } from '../../../shared/program.model';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {

  constructor(private service: ProgramService) { }
  private id: number;
  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pro: Program) {
    this.service.formData = Object.assign({}, pro);
    this.service.formDataI = Object.assign({}, pro);
  }
  loadID(idd: number) {
    this.id = idd;
  }
}
