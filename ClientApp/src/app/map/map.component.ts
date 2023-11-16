import { Component, AfterViewInit , OnInit} from '@angular/core';
import * as L from 'leaflet';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map:any;

  constructor(private repo: Repository) { }

  private initMap(width:number , lon:number): void {
    this.map = L.map('map', {
      center: [ width, lon ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 6 ,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  // ngAfterViewInit(): void {

    
  //     this.initMap(this.repo.tender.width || 0 ,this.repo.tender.longitude || 0 );
      
    
  // }

  ngOnInit(): void {

    
      setTimeout(() => {
        this.initMap(this.repo.tender.width || 0 ,this.repo.tender.longitude || 0 );
        
      },250);
      
    
  }
}




