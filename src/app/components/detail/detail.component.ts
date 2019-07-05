import { TradersClubService } from './../services/tradersClub.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  traderCar: any = [];

  constructor(private tradersclubservice: TradersClubService) { 
    // this.tradersclubservice.searchCar() 
    //   .subscribe(trader => {
    //     console.log(trader)
    //     this.traderCar = trader  
    //   })
    
  }

  ngOnInit() {
  }

}
