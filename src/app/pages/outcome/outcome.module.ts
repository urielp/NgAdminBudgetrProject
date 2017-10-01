import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import {OutcomeComponent} from './outcome.component';
import {routing} from './outcome.routing';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../theme/nga.module';
import {DefaultModal} from './default-modal/default-modal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbDropdownModule,
    NgbModalModule,
  ],
  declarations: [
    OutcomeComponent,
    DefaultModal
  ],
  entryComponents:[
    DefaultModal
  ]
})
export class OutcomeModule { }
