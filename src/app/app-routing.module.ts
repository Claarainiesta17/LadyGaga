import { AboutComponent } from './pages/about/about.component';
import { AlbumsDetailComponent } from './pages/albums-detail/albums-detail.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: "full", component: HomeComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:albumID', component: AlbumsDetailComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
