import { Component, OnInit, Input } from '@angular/core';
import { Bartender } from '../../bartender.model';


@Component({
  selector: 'app-bartenders-list',
  templateUrl: './bartenders-list.component.html',
  styleUrls: ['./bartenders-list.component.css']
})
export class BartendersListComponent implements OnInit {
  @Input() childBartenderList: Bartender[];

  constructor() { }

  ngOnInit() {
  }

}
