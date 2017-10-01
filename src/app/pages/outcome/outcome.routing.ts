/**
 * Created by Uriel on 23/06/2017.
 */
import {Routes, RouterModule, Router} from '@angular/router';
import { OutcomeComponent} from './outcome.component';


const routes: Routes =[
  {
    path: '',
    component:OutcomeComponent
  }
  ];

export const routing =RouterModule.forChild(routes);
