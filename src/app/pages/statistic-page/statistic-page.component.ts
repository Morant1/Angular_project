import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';


@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  chartData = {
  title:'',
  type:'LineChart',
  data: [],
  columns: ['Browser', '%'],
  width:550,
  height:400
}

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit():Promise<void>{


    const price = await this.bitcoinService.getMarketPrice()
    if (price) {
      this.chartData.title = price.description;
      let values = price.values;
      for (let i = 0; i < values.length; i++) {
      this.chartData.data.push(Object.values(values[i]))
      }
  }
}}


