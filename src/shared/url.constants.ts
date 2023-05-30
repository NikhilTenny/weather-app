import { from } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root",
})
export class UrlConstants {

  baseUrl = "assets/";
  weather_conditon = "conditions.json";
  weather_data = "weather.json";
}