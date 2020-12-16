import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { RedComponent } from './views/red/red.component'
import { ClassComponent } from './views/class/class.component'
import { MapComponent } from './views/map/map.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'red',
    component: RedComponent
  },
  {
    path: 'class/:id',
    component: ClassComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
