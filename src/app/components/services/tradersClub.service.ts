import { HttpClient, HttpHandler, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cars } from './traders.model';

import { Observable } from 'rxjs';

const httOptions = {
  headers:  new HttpHeaders({
    'Content-type': 'aplication/json'
  })
}


@Injectable ({
  providedIn: 'root'
})

export class TradersClubService {
  [x:  string]: any;

  private search: string = '?search=';
  private brands: string = 'https://private-anon-533155c937-tradersclubapi.apiary-mock.com/api/brands';
  private UrlTradersClubBase: string = 'https://private-anon-533155c937-tradersclubapi.apiary-mock.com/api/cars';
  private urlRemove: string = 'https://private-anon-533155c937-tradersclubapi.apiary-mock.com/api/cars/id';

  constructor(private http: HttpClient){}


  //methods
  //documention  https://tradersclubapi.docs.apiary.io/#

  searchCar() {
    const url = `${this.UrlTradersClubBase}${this.search}`;
    return this.http.get(url);
  }

  searchAutomaker(){
    const url = `${this.brands}`;
    return this.http.get(url);
  }

  addCar(cars: Cars){
    const url = `${this.UrlTradersClubBase}`;
    return this.http.post(url, cars)
  }

  updateCar(cars:  Cars){
    const url = `${this.urlRemove}`;
    return this.http.put(url, cars)
  }

  removeCar(id: number){
    const url = `${this.urlRemove}`;
    return this.http.delete(`url${id}`);
  }

  // deleteCar (id: number): Observable<{}> {
  //   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
  //   return this.http.delete(this.urlRemove, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('deleteCar'))
  //     );
  // }


}
