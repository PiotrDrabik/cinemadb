# Cinemadb

You can see working page at: [http://cinemadb.papol.pl](http://cinemadb.papol.pl)

Code:
- Angular 12
- Bootstrap 5
- ngx-translate: 4 language versions implemented via API + ngx-translate in JSON files
- fontawesome 5
- angular material + translation changes for pagination
- unit tests
- types
- forms validation
- API calls as abstraction class
- Builder-data.component used as BaseClass for all repeatable functionalities

Page details:
- responsiveness
- routing with guard
- language selection

main page 
- TRENDING NOW carousel
- upcoming movies premiere
- links for the details page

search results page
- people and media results displayed
- pagination
- links for the details page

details page
- people or media
- images,
- youtube video embeded
- cast listed with photos (and details link)

series page
- TRENDING NOW list
- links for the details page

people page
- Show business top actors.
- links for the details page

members page
- not available
- calls guard to navigate to main


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
