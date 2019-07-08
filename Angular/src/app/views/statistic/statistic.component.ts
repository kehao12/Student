import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../../shared/intake.service';
import { CatalogService } from '../../shared/catalog.service';
import { ProgramService } from '../../shared/program.service';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../shared/student.model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  CATA_ID: number;
  INTAKE_ID: number;
  PRO_ID: number;
  count: number;

  constructor(private Intake: IntakeService,
    private Catalog: CatalogService,
     private Program: ProgramService,
     // tslint:disable-next-line:no-shadowed-variable
     private Student: StudentService) { }

  ngOnInit() {
    this.count = 0;
    this.CATA_ID = null;
    this.PRO_ID = null;
    this.INTAKE_ID = null;
    this.Intake.refreshList();
    this.Catalog.refreshList();
    this.Program.refreshList();
    this.Student.refreshList();
  }
  init() {
    this.count = 0;
  }
  cong() {
    this.count ++;
  }


}
