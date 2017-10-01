import { Component } from '@angular/core';
import {BasicTablesService} from './outcome.service';
import { DefaultModal } from './default-modal/default-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-outcome',
  providers:[BasicTablesService],
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']


})
export class OutcomeComponent  {

  metricsTableData:Array<any>;
  constructor(private _basicTablesService: BasicTablesService,private modalService: NgbModal) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
  childModalShow() {

    //var test = this.modalService.open(null, {size: 'sm'});
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Child modal';
    activeModal.componentInstance.modalContent = `I am a child modal, opened from parent component!`;
  }
}
