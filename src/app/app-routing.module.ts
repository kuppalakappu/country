import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CountryformComponent } from './countryform/countryform.component';

const routes: Routes = [{path:"country",component:CountryComponent},{path:"pagenotfound", component:PagenotfoundComponent},
{path:'countryform',component:CountryformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
