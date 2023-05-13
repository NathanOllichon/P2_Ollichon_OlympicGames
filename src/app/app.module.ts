import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TotalMedalsChartComponent } from './pages/home/total-medals-chart/total-medals-chart.component';
import { NationChartComponent } from './pages/home/total-medals-chart/nation-chart/nation-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    NotFoundComponent,
     TotalMedalsChartComponent,
      NationChartComponent
    ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
