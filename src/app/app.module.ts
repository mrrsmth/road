import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ToTopButtonComponent } from './ui/to-top-button/to-top-button.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { RoadTableComponent } from './pages/road-table/road-table.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { JavascriptComponent } from './pages/lesson/javascript/javascript.component';
import { TypesComponent } from './pages/lesson/pages/types/types.component';
import { PassedModalComponent } from './ui/passed-modal/passed-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoadTableComponent,
    LayoutComponent,
    ErrorComponent,
    ToTopButtonComponent,
    MenuComponent,
    FooterComponent,
    JavascriptComponent,
    TypesComponent,
    PassedModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [RoadTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
