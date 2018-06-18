import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/pages/home.component';

const appRoutes: Routes = [
  { path: '/', component:  HomeComponent }
  //  { path: '/search-results/:propertyType/:maxPrice/:minBeds', component:  SearchResultsComponent }
  //  { path: '/property-details/:propertyId', component:  PropertyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
