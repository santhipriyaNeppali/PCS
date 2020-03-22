import { Component, OnInit, Input} from '@angular/core';
import { suburb } from 'src/app/models/suburb.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GpsModalComponent } from '../gps-modal/gps-modal.component';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.less']
})
export class LocationItemComponent implements OnInit{

  @Input() suburb: suburb;


  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

 

  clickLink($event){
    this.dialog.open(GpsModalComponent , {
      width: '500px',
      height: '500px',
      data: {suburb: this.suburb}
    });
    $event.stopImmediatePropagation();
    $event.stopPropagation();
  }

}
