import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class CountryformserviceService {

  constructor(private httpclient:HttpClient) { }

  countryFormLogin(credentials:any):Observable<string>{

return this.httpclient.post<string>('abcurl.com',credentials)

  }
}
