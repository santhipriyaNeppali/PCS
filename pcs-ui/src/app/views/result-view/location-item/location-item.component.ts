import { Component, OnInit, Input } from '@angular/core';
import { suburb } from 'src/app/models/suburb.model';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.less']
})
export class LocationItemComponent implements OnInit {

  @Input() suburb: suburb;

  constructor() { }

  ngOnInit() {
  }

}
