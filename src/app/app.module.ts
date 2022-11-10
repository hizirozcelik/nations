import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NationDialogComponent } from './nation-dialog/nation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
