import { Payment } from './../../models/payment';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-widget-payment',
  templateUrl: './widget-payment.component.html',
  styleUrls: ['./widget-payment.component.css']
})
export class WidgetPaymentComponent implements OnInit {

  @Input() payment: Payment;
  @Input() selection: Observable<number>;

  @Output() selected = new EventEmitter<number>();

  public showSelected: boolean;

  constructor() {}

  ngOnInit(): void {
    this.selection.subscribe(
      evt => {
        if (evt === this.payment.id) {
          this.showSelected = true;
        }
        else {
          this.showSelected = false;
        }
      }
    );
  }

  select(): void {
    this.selected.emit(this.payment.id)
  }
}
