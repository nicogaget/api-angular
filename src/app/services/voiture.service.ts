import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';

@Injectable({
  providedIn: 'root',
})
export class VoitureService {
  voiture: Voiture = new Voiture(10, 'citroen', 'bleu', 1000);
  constructor() {}
}
