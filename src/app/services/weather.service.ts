import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from 'src/shared/url.constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private url_constants: UrlConstants) { }

  get_conditions(): Observable<any> {
    const url = this.url_constants.baseUrl + this.url_constants.weather_conditon;
    return this.http.get<any>(url);
  }

  get_weather(): Observable<any> {
    const url = this.url_constants.baseUrl + this.url_constants.weather_data;
    return this.http.get<any>(url);

  }
  
}
