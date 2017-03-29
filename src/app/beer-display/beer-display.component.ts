import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BeerService } from '../beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-display',
  templateUrl: './beer-display.component.html',
  styleUrls: ['./beer-display.component.css'],
  providers: [BeerService]
})

export class BeerDisplayComponent implements OnInit {

constructor(private router: Router, private beerService: BeerService) { }

ngOnInit() {
  this.beers = this.beerService.getBeers();
}

beers: FirebaseListObservable<any[]>;

  halfPintLeft(beer) {
    return beer.pintsLeft * 2;
  }


}
