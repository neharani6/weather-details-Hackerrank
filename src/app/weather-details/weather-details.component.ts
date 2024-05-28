import { Component, Input } from '@angular/core';

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent {
  @Input()
  weatherData: data[] = [];
  city: any = '';
  cityDetails!: data;
  isNoResult = false;
  isCityFound = false;
  index: any;

  searchCity() {
    this.isCityFound = false;
    this.index = this.weatherData
      .map((item) => item.name.toLowerCase())
      .indexOf(this.city.toLowerCase());
    if (this.index != -1) {
      this.isCityFound = true;
      this.cityDetails = this.weatherData[this.index];
      this.isNoResult = false;
    } else {
      this.isCityFound = false;
      this.isNoResult = true;
    }
  }
}
