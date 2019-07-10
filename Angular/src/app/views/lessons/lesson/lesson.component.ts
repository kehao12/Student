import { Component, OnInit, ViewChild } from '@angular/core';
import { LessonService } from '../../../shared/lesson.service';
import { CatalogService } from '../../../shared/catalog.service';
import { ProgramService } from '../../../shared/program.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';
import { ConditionService } from '../../../shared/condition.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  constructor(private service: LessonService,
    private Catalog: CatalogService,
    private Program: ProgramService,
    private Condition: ConditionService,
    private pnotify: PnotifyService) { }
    id: string;
    LESS_ID: number;
    PRO_ID: number;
    ngOnInit() {
      this.resetForm();
      this.service.refreshList();
      this.Catalog.refreshList();
      this.Program.refreshList();
    }
    resetForm(form?: NgForm) {
      if (form != null) {
        form.resetForm();
      }
      this.service.formData = {
        LESS_ID: 0,
        LESS_CODE: '',
        LESS_NAME: '',
        PRO_ID: null,
        CATA_ID: null,
        CREDIT: null,
        PRICE: null,
        STATUS: 1,
        NOTE: ''
      };
    }

    // Lưu giá trị LESS_ID
    loadCode(id: string, PRO_ID: number) {
      this.id = id;
      this.PRO_ID = PRO_ID;
    }

    // Nút thêm môn học
    onSubmit(form: NgForm) {
      // if (form.value.STU_ID == null) {
      //   this.inserRecord(form);
      // } else {
      //   this.updateRecord(form);
      // }
      this.loadCode(form.value.LESS_CODE, form.value.PRO_ID);
      console.log(form.value.LESS_CODE);
      console.log(form.value);
      this.inserRecord(form);
      this.service.refreshList();


      }

      //Nút thêm ràng buộc
      onSubmit1(form: NgForm) {
        console.log(form.value);
        this.inserRecord1(form);
        this.service.refreshList();
        }

        // Thêm môn học
      inserRecord(form: NgForm) {
        // this.Condition.loadForm(form.value.LESS_ID);
         this.service.postLess(form.value).subscribe(res => {
          this.loadCode(form.value.LESS_CODE, form.value.PRO_ID);
          console.log('sucsess');
          this.service.refreshList();
          this.pnotify.showSuccessInsert('Insert Success');
          });
        }

        // Thêm ràng buộc
        inserRecord1(form: NgForm) {
          console.log('id:  ' + this.id);
          this.service.refreshList();
          for ( const less of this.service.list) {
            console.log(less.LESS_CODE.toLowerCase());
            console.log(less.LESS_CODE.toLowerCase() === this.id.toLowerCase());
            if (less.LESS_CODE.toLowerCase() === this.id.toLowerCase()) {

              this.LESS_ID = less.LESS_ID;
            }
          }
          console.log('Pro id' + this.PRO_ID);
          console.log('Less id' + this.LESS_ID);
          console.log('Con id' + form.value.CON);
          this.Condition.loadForm(this.LESS_ID, form.value.CON);
          console.log(this.Condition.formData1);
            this.Condition.postCon(this.Condition.formData1).subscribe(resq => {
              console.log('Condition sucsess');
              this.Condition.refreshList();

          console.log(this.Condition.formData1);
            this.resetForm();
            this.service.refreshList();
             });
          }

          // Check valid Code và Name

          checkCode(id: number, code: string): boolean {
            if ( this.service.list === null) { return true; }
            if ( code === '' || code === null) { return true; }
            for (const less of this.service.list) {
            if (less.LESS_CODE.toLowerCase() === code.toLowerCase() ) {
            return false;
            }
            }
          return true;
          }

          checkName(id: number, code: string): boolean {
            if ( this.service.list === null) { return true; }
            if ( code === '' || code === null) { return true; }
            for (const less of this.service.list) {
            if (less.LESS_NAME.toLowerCase() === code.toLowerCase() ) {
            return false;
            }
            }
          return true;
          }
}
