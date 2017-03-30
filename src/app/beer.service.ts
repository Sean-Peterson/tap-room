import { Injectable } from '@angular/core';
import { Beer } from './beer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BeerService {
  beers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.beers = angularFire.database.list('beers');
  }

  getBeers(){
  return this.beers;
  }

  addBeer(newBeer: Beer) {
    this.beers.push(newBeer);
  }

  getBeerById(beerId: string) {
    return this.angularFire.database.object('/beers/' + beerId);
  }

  updateBeer(localUpdatedBeer){
    var beerEntryInFirebase = this.getBeerById(localUpdatedBeer.$key);
    beerEntryInFirebase.update({
      name: localUpdatedBeer.name,
      brewery: localUpdatedBeer.brewery,
      location: localUpdatedBeer.location,
      ibu: localUpdatedBeer.ibu,
      alcoholContent: localUpdatedBeer.alcoholContent,
      halfPintPrice: localUpdatedBeer.halfPintPrice,
      pintPrice: localUpdatedBeer.pintPrice,
      description: localUpdatedBeer.description
    });
    }

  deleteBeer(beerToDelete) {
    var beerInFirebase = this.getBeerById(beerToDelete.$key);
    beerInFirebase.remove();
  }
}
