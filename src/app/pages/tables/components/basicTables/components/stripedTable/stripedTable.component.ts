import {Component} from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'striped-table',
  templateUrl: './stripedTable.html'
})
export class StripedTable {

  smartTableData:Array<any>;

  calcAge:number;

  constructor(private _basicTablesService: BasicTablesService) {
    this.smartTableData = _basicTablesService.smartTableData;
    this.calcAge=0;
    this.test();
  }

test()
{
  this.smartTableData.forEach(age =>
    {
this.calcAge=this.calcAge+parseInt(age.age) ;
console.log(this.calcAge);
    }
  )
}
}
