import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';

@Component({
  selector: 'app-beer-display',
  templateUrl: './beer-display.component.html',
  styleUrls: ['./beer-display.component.css']
})
export class BeerDisplayComponent implements OnInit {
constructor() { }
ngOnInit() {
}


  beers: Beer[] = [
    new Beer('Erica Original', 'Best-Beers', 'San Diego, CA', 15, 12, 5, 7, 'A dark, nutty roast with a kick'),
    new Beer('Nerdtastic IPA', 'Epicodus Brews', 'Portland, OR', 80, 8, 4, 6, 'Sweet and bitter hoppy flavor'),
    new Beer('Sean Special', 'Portland Pillsners', 'Portland, OR', 20, 5.2, 4, 6, 'Light bodied malt profile with a mystery flavor'),
    new Beer('Almost Summer Pale Ale', 'Summer fo eva','Cascade Locks, OR', 35, 5.5, 4, 6, 'Floral front, hop heavy pale ale for those desiring an early taste of summer')
  ];

  halfPintLeft(beer) {
    return beer.pintsLeft * 2;
  }


}
