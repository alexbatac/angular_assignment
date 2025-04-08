import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = '0a28ab8875d6995a97530ae023d5bcf9';  // Use your OpenWeatherMap API Key
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  // Get the weather forecast for a city
  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`; // Use `metric` for Celsius
    return this.http.get<any>(url);
  }
}
