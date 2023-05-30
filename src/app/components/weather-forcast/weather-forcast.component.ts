import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.scss']
})
export class WeatherForcastComponent implements OnInit {


  condition_list: any[] = [];
  selected_condition: any;
  forecast_list: any[] = [];
  filtered_forecast: any[] = [];


  constructor(private weather_service: WeatherService) {}

  ngOnInit(): void {

    this.weather_service.get_conditions().subscribe({
      next: (data) => {
        const temp_list = data.map((item: { condition: string })=> item.condition);
        this.condition_list = ['All', ...temp_list]
      }
    })
    this.weather_service.get_weather().subscribe((forecast) => {
      this.forecast_list = forecast
      this.filtered_forecast = this.forecast_list
    });
  }

  filteredWeather() {
    if (this.selected_condition == 'All') {
      this.filtered_forecast = this.forecast_list

    }
    else {
      this.filtered_forecast = this.forecast_list.filter(item => item.condition === this.selected_condition);
    }
  }

}
