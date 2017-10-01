import { Component, OnInit } from '@angular/core';
import {bankAccountService} from './bank-account.service'
import {BankAccount} from './bankAccount.model';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent {

  public bankData: Array<Object>;
  private bankAccountObj:BankAccount;
  constructor(private _bankAccountSerive:bankAccountService) {

    this.bankData=_bankAccountSerive.getData();
    console.log(this.bankData);
  }

  isNegetive(bankObject:any)
  {
    this.bankAccountObj=new BankAccount();
    this.bankAccountObj=bankObject;
    return this.bankAccountObj.balance < 0 ;
  }

  test()
  {
    alert("TEST");
  }

}
