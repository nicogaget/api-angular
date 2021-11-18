import { Component } from '@angular/core';
import { Voiture } from './models/voiture';
import { VoitureService } from './services/voiture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-api';
  voiture: Voiture;

  constructor(private vs: VoitureService) {
    this.voiture = this.vs.voiture;
  }
}
