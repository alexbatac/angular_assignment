import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const google: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html' 
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQrXzFFZZjWDp2wpLk7N_lYnLwOow9bKA`; // Replace with yours
    script.async = true;
    script.defer = true;
    script.onload = () => this.initMap();
    document.head.appendChild(script);
  }

  initMap(): void {
    const geocoder = new google.maps.Geocoder();
    const address = '59 Hayden St, Toronto, ON M4Y 2P2';

    geocoder.geocode({ address }, (results: any, status: any) => {
      if (status === 'OK') {
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          zoom: 16,
          center: results[0].geometry.location
        });
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        console.error('Geocode failed: ' + status);
      }
    });
  }
}
