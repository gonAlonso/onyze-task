import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassengerInfoComponent } from './widgets/passenger-info/passenger-info.component';
import { WidgetJourneyComponent } from './widgets/widget-journey/widget-journey.component';
import { WidgetPaymentComponent } from './widgets/widget-payment/widget-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerInfoComponent,
    WidgetJourneyComponent,
    WidgetPaymentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
