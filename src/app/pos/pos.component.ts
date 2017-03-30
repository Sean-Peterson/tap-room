import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BeerService } from '../beer.service';
import { Bartender } from '../bartender.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
  providers: [BeerService]
})

export class PosComponent implements OnInit {

constructor(private router: Router, private beerService: BeerService) { }

ngOnInit() {
  this.beers = this.beerService.getBeers();
}

beers: FirebaseListObservable<any[]>;

  beginHalfSale(beer) {
    this.beerService.halfSale(beer);
  }

  beginPintSale(beer) {
    this.beerService.pintSale(beer);
  }

  beginRestock(beer) {
    this.beerService.restockBeer(beer);
  }

  masterBartenderList: Bartender[] = [
    new Bartender('Bob', 'Best Bar', 'Sean Special'),
    new Bartender('Jill', 'Sky Club', 'Almost Summer Pale Ale'),
    new Bartender('Rex', 'Bar 9', 'Hops Galore')
  ];


}
