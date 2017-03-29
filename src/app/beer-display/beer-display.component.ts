import { Component, OnInit } from '@angular/core';

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
    new Beer('Erica Original', 'Best-Beers', 15, 12, 5, 7, 'A dark, nutty roast with a kick'),
    new Beer('Nerdtastic IPA', 'Epicodus Brews', 80, 8, 4, 6, 'Sweet and bitter hoppy flavor'),
    new Beer('Sean Special', 'Portland Pillsners', 20, 5.2, 4, 6, 'Light bodied malt profile with a mystery flavor'),
    new Beer('Almost Summer Pale Ale', 'Summer fo eva', 35, 5.5, 4, 6, 'Floral front, hop heavy pale ale for those desiring an early taste of summer')
  ];

  halfPintLeft(beer) {
    return beer.pintsLeft * 2;
  }


}

export class Beer {
  empty: boolean = false;
  pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public ibu: number, public alcoholContent: number, public halfPintPrice: number, public pintPrice: number, public description: string) { }


}
