import { TestBed } from '@angular/core/testing';

import { MapperDatasForNgxChartsService } from './mapper-datas-for-ngx-charts.service';

describe('MapperDatasForNgxChartsService', () => {
  let service: MapperDatasForNgxChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapperDatasForNgxChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
