import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface SelectItem {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propertyTypes: SelectItem[];
  prices: SelectItem[];
  beds: SelectItem[];
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.propertyTypes = [
      {value: 'apartment', viewValue: 'Apartment'},
      {value: 'house', viewValue: 'House'}
    ];

    this.prices = [
      {value: 100000, viewValue: '100k'},
      {value: 200000, viewValue: '200k'},
      {value: 300000, viewValue: '300k'},
      {value: 400000, viewValue: '400k'},
      {value: 500000, viewValue: '500k'},
      {value: 600000, viewValue: '600k'}
    ];

    this.beds = [
      {value: 1, viewValue: '1'},
      {value: 2, viewValue: '2'},
      {value: 3, viewValue: '3'}
    ];

    this.searchForm = this.fb.group({
      propertyType: ['', Validators.required],
      maxPrice: ['', Validators.required],
      minBeds: ['', Validators.required]
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const formValue = this.searchForm.value;
    this.router.navigate(['search-results', formValue.propertyType, formValue.maxPrice, formValue.minBeds]);
  }

}
