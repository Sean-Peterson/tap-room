import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

export class Beer {
  empty: boolean = false;
  ozLeft: number = 1984;
  constructor(public name: string, public brand: string, public ibu: number, public alcoholContent: number, public halfPintPrice: number, public pintPrice: number) { }
  
}
