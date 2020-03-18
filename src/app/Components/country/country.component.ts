import { Component, OnInit} from '@angular/core';
import { CoronaService } from 'src/app/Services/corona.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{
  countries: any = null;
  searchCountry: any;

  constructor(private covidService: CoronaService) { 

    this.covidService.getCountries().subscribe((data)=>{
      this.countries = data;
    });

  }
}
