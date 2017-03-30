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

  halfSale(beer) {
    var beerEntryInFirebase = this.getBeerById(beer.$key);
    if (beer.pintsLeft > .5) {
      beerEntryInFirebase.update({
        pintsLeft: beer.pintsLeft - .5
      });
    } else if (beer.pintsLeft === .5) {
      beerEntryInFirebase.update({
        pintsLeft: beer.pintsLeft - .5,
        empty: true
      })
    }
  }

  pintSale(beer) {
    var beerEntryInFirebase = this.getBeerById(beer.$key);
    if (beer.pintsLeft > 1) {
      beerEntryInFirebase.update({
        pintsLeft: beer.pintsLeft - 1
      });
    } else if (beer.pintsLeft === 1) {
      beerEntryInFirebase.update({
        pintsLeft: beer.pintsLeft - 1,
        empty: true
      })
    } else {
      alert('Not enough for sale')
    }
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

    restockBeer(localUpdatedBeer){
      var beerEntryInFirebase = this.getBeerById(localUpdatedBeer.$key);
      beerEntryInFirebase.update({
        pintsLeft: 124,
        empty: false
      });
      }

  deleteBeer(beerToDelete) {
    var beerInFirebase = this.getBeerById(beerToDelete.$key);
    beerInFirebase.remove();
  }
}
