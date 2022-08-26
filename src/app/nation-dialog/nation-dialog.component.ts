import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nation-dialog',
  templateUrl: './nation-dialog.component.html',
  styleUrls: ['./nation-dialog.component.css']
})
export class NationDialogComponent implements OnInit {

  // properties
  data: any; // selected country info
  map = ''; // URL for map image file
  headers = ['Name', 'District', 'Population']; //columns for the table

    constructor(@Inject(MAT_DIALOG_DATA) data: any) {
      // get data from parents
      this.data = data;
      console.log('city array from child is read' + this.data.city[0].Name);
      // construct the map name
      this.map = 'assets/maps/' + data.nation.Code.toLowerCase() + '.gif';
    }

    ngOnInit(): void {}
  }
