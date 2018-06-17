## MyHome app

### Description

**Requirements**

Create simple property listing application using Angular and ReactJS.

The application will consist of

- a homepage with a simple search form,
- a search results listing page
- and a property details page.

The application will include some tests to validate routes and paths within the app.

Use your own generated.json file for the data or any public web API.

#### Homepage Specifications

Route: `/`

Search form fields: property type, max price, min beds (select menus)

The form will have search button so when you click on it you will be directed to the search results page with a filtered property listing.

Ideally you should have your search results route containing the info for filtering the list
e.g.
`http://search-results/{{propertyType}}/{{maxPrice}}/{{minBeds}}/`

#### Search Results Specifications

Route: `/search-results/{{propertyType}}/{{maxPrice}}/{{minBeds}}/`

Page will contain list of filtered properties.

Each property will have

- main image of the property,
- property price,
- property address,
- number of bedrooms,
- property type,
- link to get to the details page

#### Property Details Page Specifications

Route: `/property-details/{{propertyId}}`

The details page will have:

- the list of images,
- property price,
- info about number of bedrooms,
- property address,
- property type,
- description

The images should be displayed nicely through carousel or gallery.
