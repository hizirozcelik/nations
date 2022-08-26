import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NationDialogComponent } from './nation-dialog/nation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties
  nations: any;
  cities: any;
  majorCities: any;
  infoText =
    'This is an Angular application to load the list of countries from a local JSON file, and to display the national flags using Angular Material Card component, and displays the detailed information of the selected country into a Material Dialog when a user click on a Material Card.';

  // inject httpclient service here
  constructor (http: HttpClient, private dialog: MatDialog){
    // fetch country json
    const URL= 'assets/country.json';
    http.get(URL).subscribe({
      // success
      next: (json) => {
        let obj:any = json;
        this.nations = obj.Country;
        // sorting countries
        this.nations = this.nations.sort((a:any, b:any) =>
          a.Name.localeCompare(b.Name)
        );
        console.log('Countries loaded JSON: ' + this.nations.length);
      },
       // fail
       error: (err) => console.log(err.message),

    });

      // fetch city json
      const URL1 = 'assets/city.json';

      http.get(URL1).subscribe({
        // success
        next: (json) => {
          let obj: any = json;
          this.cities = obj.City;
          console.log('cities loaded JSON: ' + this.cities.length);
        },
        // fail
        error: (err) => console.log(err.message),
      });

  }
    // generate a flag src URL based on 2-digit country code

    getFlagName(nation: any): string {
      let url = 'assets/flags/' + nation.Code2.toLowerCase() + '.jpg';
      return url;
    }

    // open dialog when user click on a card
  openDialog(nation: any, city: any) {
    // configure the dialog
    let config = new MatDialogConfig();
    // for cities
    config.width = '80%';
    config.height = 'auto';
    config.data = { nation, city }; // pass the nation and major cities data

    // finally open the dialog
    this.dialog.open(NationDialogComponent, config);
  }

  getCities(nation: any): any {
    this.majorCities = filterCities(this.cities, nation);
    return this.majorCities;
  }


}
function filterCities(cities: any, nation: any) {
  return cities.filter((object: any) => {
    return object.CountryCode == nation.Code;
  });
}
