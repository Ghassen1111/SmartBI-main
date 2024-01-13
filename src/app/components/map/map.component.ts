import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  lat = 36.817309;
  lng = 10.183305;
  zoom=12;
  constructor() { }

  ngOnInit() {
  }

}
