import { Component, OnInit} from '@angular/core';
import { CoronaService } from 'src/app/Services/corona.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{
  countries: any = null;
  searchCountry: any = [];
  country : string;
  ngOnInit(): void {
   
  }
  constructor(private covidService: CoronaService) { 

    this.covidService.getCountries().subscribe((data)=>{
      this.countries = data;
    });

  }

  getCountriesd(country){

    return this.covidService.searchCountries(country).then(res=>this.countries=res.Search);
  }
  


}
