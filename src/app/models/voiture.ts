export class Voiture {
  id: number;
  marque: string;
  couleur: string;
  prix: number;
  constructor(id: number, marque: string, couleur: string, prix: number) {
    this.id = id;
    this.marque = marque;
    this.couleur = couleur;
    this.prix = prix;
  }
}
