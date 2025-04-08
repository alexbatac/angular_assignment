import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  imports: [CommonModule],
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  weatherData: any[] = [];
  city: string = 'Toronto';  // Fixed city
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.getForecast(this.city).subscribe(
      (data) => {
        this.weatherData = data.list.filter((entry: any) =>
          entry.dt_txt.includes('12:00:00') &&
          (entry.dt_txt.startsWith('2025-04-09') || entry.dt_txt.startsWith('2025-04-10'))
        );
      },
      (error) => {
        this.errorMessage = 'Error fetching weather data';
        console.error(error);
      }
    );
  }
}
