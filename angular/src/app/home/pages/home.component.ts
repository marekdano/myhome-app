import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propertyType: any;

  constructor() { }

  ngOnInit() {
    this.propertyType = [
      {value: 'apartment', viewValue: 'Apartment'},
      {value: 'house', viewValue: 'House'}
    ];
  }

}
