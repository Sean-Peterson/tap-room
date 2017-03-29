import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [BeerService]
})
export class EditComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  submitBeer(newBeer) {
    this.beerService.addBeer(newBeer);
    console.log(newBeer);
  }

}
