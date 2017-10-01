import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;

    return [
      {
        color: pieColor,
        description: 'dashboard.entertainment',
        stats: '57,820',
        icon: 'bidor',
      }, {
        color: pieColor,
        description: 'dashboard.food',
        stats: '$ 89,745',
        icon: 'food',
      }, {
        color: pieColor,
        description: 'dashboard.on_going_payments',
        stats: '178,391',
        icon: 'gen-bills',
      }, {
        color: pieColor,
        description: 'dashboard.main_bills',
        stats: '32,592',
        icon: 'bill',
      }
    ];
  }
}
