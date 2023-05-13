import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMedalsChartComponent } from './total-medals-chart.component';

describe('TotalMedalsChartComponent', () => {
  let component: TotalMedalsChartComponent;
  let fixture: ComponentFixture<TotalMedalsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalMedalsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalMedalsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
