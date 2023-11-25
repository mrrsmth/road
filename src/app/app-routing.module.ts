import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoadTableComponent } from './pages/road-table/road-table.component';
import { JavascriptComponent } from './pages/lesson/javascript/javascript.component';
import { TypesComponent } from './pages/lesson/pages/types/types.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: MainComponent },
      { path: 'table', component: RoadTableComponent },
      { path: 'js', component: JavascriptComponent ,
    children: [
      { path: 'js/types', component: TypesComponent },
    ]
    },
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
