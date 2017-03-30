import { Component, OnInit } from '@angular/core';
import { Beer } from '../../beer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BeerService } from '../../beer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {

  constructor(private router: Router, private beerService: BeerService) { }

  ngOnInit() {
    this.beers = this.beerService.getBeers();
  }

  beers: FirebaseListObservable<any[]>;

  editButtonClicked(beer) {
    this.beerService.updateBeer(beer);
  }

}
