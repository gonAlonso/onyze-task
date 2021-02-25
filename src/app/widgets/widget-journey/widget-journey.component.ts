import { Component, Input, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Journey } from './../../models/journey';

@Component({
  selector: 'app-widget-journey',
  templateUrl: './widget-journey.component.html',
  styleUrls: ['./widget-journey.component.css']
})
export class WidgetJourneyComponent implements OnInit {
  @Input() journey: Journey;

  public distance: number = 10;
  public time: number = 20;
  public energy: number = 30;
  public price: number = 40;
  public originName: string = 'Jackson Heights';
  public originAdress: string = '37-24 74th Street';
  public destinyName: string = 'Greenpoint';
  public destinyAdress: string = '81 Gate St Brooklyn';

  public hideInfo: boolean;

  private replaySubject = new ReplaySubject<number>(1);
  public selection: Observable<number> = this.replaySubject.asObservable();

  constructor() {
  }

  ngOnInit(): void {
  }

  paymentSelected(option): void {
    this.replaySubject.next(option);
    console.log(`Option ${option}`)
  }

  public payments = [
    {
      id: 1,
      name: 'Paypal',
      icon: 'assets/paypal.png'
    },
    {
      id: 2,
      name: 'Visa',
      icon: 'assets/visa.png'
    },
    {
      id: 3,
      name: 'Mastercard',
      icon: 'assets/mastercard.jpeg'
    },
    {
      id: 4,
      name: 'ApplePay',
      icon: 'assets/applepay.webp'
    },
  ];

}
