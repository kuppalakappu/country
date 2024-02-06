import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  constructor(private httpClient:HttpClient) {

   }
   getCountries(){
   return this.httpClient.get('https://restcountries.com/v3.1/all');
  } 
  
}

