import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { suburb } from 'src/app/models/suburb.model';

@Component({
  selector: 'app-gps-modal',
  templateUrl: './gps-modal.component.html',
  styleUrls: ['./gps-modal.component.less']
})
export class GpsModalComponent implements OnInit, AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<GpsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.suburb = data.suburb;
     }

  coordinates: google.maps.LatLng ;
  mapOptions: google.maps.MapOptions;
  marker: google.maps.Marker;
  suburb: suburb;

  ngOnInit() {
  }

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  ngAfterViewInit() {
    this.mapInitializer(this.data.suburb.latitude,this.data.suburb.longitude);
  }

  mapInitializer(lat:number, lon:number) {
    this.coordinates = new google.maps.LatLng(lat, lon);
    this.mapOptions = {
      center: this.coordinates,
      zoom: 12
      };
  
    this.marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.map,
      });
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }

}
