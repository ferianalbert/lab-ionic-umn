import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  private _places: Place[]= [
    new Place(
      'p1',
      'Trimezia Apartment',
      'Colorful Apartment',
      'http://www.paramount-land.com/wp-content/uploads/2016/09/Beverly-16.jpg',
      650000000
    ),
    new Place(
      'p2',
      'Collins Boulevard Apartment',
      'Apartemen Ramah Lingkungan',
      'https://apartmentcollins.files.wordpress.com/2019/01/fasilitas-collins-boulevard.jpg?w=384',
      1250000000
    ),
    new Place(
      'p3',
      'Kumuh Apartment',
      'Apartemen Kumuh tapi Santuy',
      'https://akcdn.detik.net.id/customthumb/2014/10/10/1025/img_20141010155012_54379dc42db5a.jpg?w=600&q=90',
      500000000
    )
  ];

  get places() {
    return [...this._places];
  }



  constructor() { }
}
