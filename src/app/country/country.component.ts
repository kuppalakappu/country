import { Component,OnInit } from '@angular/core';
import { CountryserviceService } from './countryservice.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit{

   country:any =[]

  constructor(private  countryService:CountryserviceService){

  }
  
  ngOnInit(){
 this.countryService.getCountries().subscribe((res:any) =>{this.country=res})
  }

}
