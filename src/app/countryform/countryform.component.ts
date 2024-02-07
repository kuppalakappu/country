import { Component } from '@angular/core';
import { CountryformserviceService } from './countryformservice.service';

@Component({
  selector: 'app-countryform',
  templateUrl: './countryform.component.html',
  styleUrls: ['./countryform.component.scss']
})
export class CountryformComponent {

  username:string ='abc';
  password:string='';
 
  clickForm:string = '';

  showImage:boolean=true

  url:string ='https://banner2.cleanpng.com/20180612/llj/kisspng-google-logo-google-search-google-doodle-circular-economy-5b2082fe438318.3928951115288573422766.jpg'

  constructor(private countryformservice:CountryformserviceService ){}

  submitClick(){

    const credentials = {
      username:this.username,
      password:this.password
    }
    this.countryformservice.countryFormLogin(credentials).subscribe((res:string) => {this.clickForm= res})

    




    
  }



}
