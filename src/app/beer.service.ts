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
}
