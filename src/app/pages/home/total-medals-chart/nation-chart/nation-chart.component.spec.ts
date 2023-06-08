import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationChartComponent } from './nation-chart.component';

describe('NationChartComponent', () => {
  let component: NationChartComponent;
  let fixture: ComponentFixture<NationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
