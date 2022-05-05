import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Barche } from './offerta';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OffertaServiceService {


  url: string='https://yatch-498ae-default-rtdb.europe-west1.firebasedatabase.app/barche.json'
  constructor(private http: HttpClient) { }

    getBarche(){
      return this.http
      .get('https://yatch-498ae-default-rtdb.europe-west1.firebasedatabase.app/barche.json')
      .pipe(map(responseData => { //pipe ci permette di trasformare un blocco di observable in array
        const feedArray: Barche[] = [];

        for(let key in responseData){
          feedArray.push(responseData[key]);
        }
        return feedArray
      }))  
    }
}
