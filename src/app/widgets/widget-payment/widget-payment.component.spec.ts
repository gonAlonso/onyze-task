import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPaymentComponent } from './widget-payment.component';

describe('WidgetPaymentComponent', () => {
  let component: WidgetPaymentComponent;
  let fixture: ComponentFixture<WidgetPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
