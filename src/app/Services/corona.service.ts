import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';
  apiLocationUrl = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }

  getLocations(){
    return this.http.get(`${this.apiLocationUrl}`);
  }
}
