import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { query } from '@angular/animations';
import { Weather } from "src/app/interfaces/weather";

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly baseUrl = 'https://api.openweathermap.org';

  constructor(private http: HttpClient) {}

  // Function that takes a city name as input and returns an Observable using a Weather interface
  getWeatherForCity(city: string): Observable<Weather> {
    const params = new HttpParams({ fromObject: { q: city } });

    return this.httpGet<Weather>('weather', params).pipe(
      map((data: Weather) => ({
        ...data,
        image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      })),
      delay(500)
    );
  }

  private httpGet<T>(url: string, params: HttpParams): Observable<T> {
    params = params.append('appid', environment.apiKey);
    params = params.append('lang', 'en');
    params = params.append('units', 'metric');
    return this.http.get<T>(`${this.baseUrl}/data/2.5/weather`, { params });
  }
}
