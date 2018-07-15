import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../../properties.json';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const propertyType = this.route.snapshot.paramMap.get('propertyType');
    const maxPrice = this.route.snapshot.paramMap.get('maxPrice');
    const minBeds = this.route.snapshot.paramMap.get('minBeds');

    this.properties = this.getResultOfPropertiesBy(propertyType, +maxPrice, +minBeds);
  }

  private getResultOfPropertiesBy(propertyType: string, maxPrice: number, minBeds: number) {
    return data['properties'].filter(p => {
      return p.summary.propclass.toLowerCase() === propertyType &&
             +p.summary.price <= maxPrice &&
             p.building.rooms.beds >= minBeds;
    });
  }

}
