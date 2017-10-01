/**
 * Created by Uriel on 26/06/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()

export class bankAccountService {
  constructor() {

  }

  getData() {
    return [
      {
        bankName:"פועלים",
        accountNumber:'11-256-222',
        balance:-12600.29
      },
      {
        bankName:"דיסקונט",
        accountNumber:'669/789/885',
        balance:600.15
      },
      {
        bankName:"פועלים",
        accountNumber:'55-89-7789',
        balance:1600.11
      }

    ]
  }
}
