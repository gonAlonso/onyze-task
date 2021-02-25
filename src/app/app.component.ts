import { Observable, ReplaySubject } from 'rxjs';
import { Component } from '@angular/core';
import { Journey } from './models/journey';
import { Payment } from './models/payment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Onyze';

  public item1: Observable<Journey>;
  public item2: Observable<Journey>;
  public item3: Observable<Journey>;

  public journeys = [
    {
      id: 1,
      passenger: {
        image: 'assets/images.png',
        interactions: 3,
        email: 'invision@invisionapp.com',
        location: 'New York, NY',
        phone: '+144-3412-4422',
        name: 'Nora M. Buchanan'
      },
      origin: {
        address: '37-27 74th Street',
        name: 'Jackson Heights',
      },
      destination: {
        address: '81 Gate St Brooklyn',
        name: 'Greenpoint',
      },
      distance: 12.3,
      energy: 12.4,
      price: 34.20,
      time: 42
    },
    {
      id: 2,
      passenger: {
        image: 'assets/images.png',
        interactions: 1,
        email: 'test@example.com',
        location: 'Sagrada Familia, BCN',
        phone: '+900-800-700',
        name: 'Lorem Upsum'
      },
      origin: {
        address: '21, Sevilla',
        name: 'La Alambra',
      },
      destination: {
        address: '36, Córdoba',
        name: 'Jardines del Alcázar de los Reyes Cristianos',
      },
      distance: 124.4,
      energy: 150.8,
      price: 80.50,
      time: 227
    },
    {
      id: 3,
      passenger: {
        image: 'assets/images.png',
        interactions: 17,
        email: 'example@test.com',
        location: 'Oviedo, Asturias',
        phone: '+34-600-400-200',
        name: 'Don Pelayo'
      },
      origin: {
        address: '127, Abásalo',
        name: 'Domicilio Bilbao',
      },
      destination: {
        address: 'Abandoibarra Etorb., 2, 48009 Bilbo',
        name: 'Museo Guggenheim',
      },
      distance: 52.3,
      energy: 40.4,
      price: 25.20,
      time: 28
    },
  ];


  constructor() {
    this.item1 = new Observable<Journey>(
      obs => obs.next(this.journeys[0])
    );

    this.item2 = new Observable<Journey>(
      obs => obs.next(this.journeys[1])
    );
    this.item3 = new Observable<Journey>(
      obs => obs.next(this.journeys[2])
    );

  }
}
