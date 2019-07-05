import { TradersClubService } from './../services/tradersClub.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  traderCar: any = [];
  constructor(private traders: TradersClubService) {}

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    try {
      this.traders.searchCar()
      .subscribe(trader => {
          console.log(trader)
          this.traderCar = trader
      },
      error => {
        console.log(error, 'Error')
      })
    } catch (e) {
      console.log(e)
    }
  }

}
