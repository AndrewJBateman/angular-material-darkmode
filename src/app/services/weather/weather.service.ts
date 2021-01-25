import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { query } from "@angular/animations";

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  // Function that takes a ciy name as input and returns an Observable
  getWeatherForCity(city: string): Observable<any> {
    // const params = new HttpParams({fromObject:{ q: city}});
    // return this.httpGet('weather', params)
    //   .pipe(map(response => response()))

    // params = params.append('appid', environment.apikey);
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`;
    return this.http.get<any>(path).pipe(
      tap((data) => console.log('data', data)),
      map((data) => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      })),
      delay(500)
    );
  }
}
