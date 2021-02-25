import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetJourneyComponent } from './widget-journey.component';

describe('WidgetJourneyComponent', () => {
  let component: WidgetJourneyComponent;
  let fixture: ComponentFixture<WidgetJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
