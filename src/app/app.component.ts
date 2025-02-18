import { Component, OnInit } from '@angular/core';
import { OlympicService } from './core/services/olympic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private olympicService: OlympicService, router :Router) {}

  ngOnInit(): void {
  }
}
