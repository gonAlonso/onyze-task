import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from 'src/app/models/passenger';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})
export class PassengerInfoComponent implements OnInit {
/*
  public name: string = 'Maria Carey';
  public interactions: number = 4;
  public email: string = 'empty@email.com';
  public phone: string = '+34-900-800-700';
  public location: string = 'Brooklyn, NY';
  public image: string = 'assets/images.png';
*/
  @Input() passenger: Observable<Passenger>;

  constructor() { }

  ngOnInit(): void {
  }

}
