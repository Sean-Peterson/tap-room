import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-display',
  templateUrl: './beer-display.component.html',
  styleUrls: ['./beer-display.component.css'],
  providers: [BeerService]
})

export class BeerDisplayComponent implements OnInit {

constructor(private beerService: BeerService) { }

ngOnInit() {
  this.beers = this.beerService.getBeers();
}

beers: FirebaseListObservable<any[]>;

  halfPintLeft(beer) {
    return beer.pintsLeft * 2;
  }

  iconColor(beer) {
    if (beer.pintsLeft >= 62) {
      return "success";
    } else if (beer.pintsLeft >= 24) {
      return "warning";
    } else {
      return "danger";
    }
  }

}
