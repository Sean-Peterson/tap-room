import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Beer } from '../../beer.model';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  addFormShown: boolean = false;

  showAddForm() {
    this.addFormShown = true;
  }

  addButtonClicked(name: string, brewery: string, location: string, ibu: number, alcoholContent: number, halfPintPrice: number, pintPrice: number, description: string) {
    var newBeer: Beer = new Beer(name, brewery, location, ibu, alcoholContent, halfPintPrice, pintPrice, description);
    this.clickSender.emit(newBeer);
    this.addFormShown = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
