import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MainComponent } from './pages/main/main.component';
import { TableComponent } from './pages/table/table.component';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './pages/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,

    ErrorComponent,
     HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
