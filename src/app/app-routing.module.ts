import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoadTableComponent } from './pages/road-table/road-table.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: MainComponent },
      { path: 'table', component: RoadTableComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'error' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
