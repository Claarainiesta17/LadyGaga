import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumsDetailComponent } from './pages/albums-detail/albums-detail.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { ListComponent } from './pages/albums/components/list/list.component';
import { AlbumcardComponent } from './pages/albums-detail/components/albumcard/albumcard.component';
import { TitleComponent } from './shared/components/title/title.component';
import { PictureComponent } from './shared/components/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumsDetailComponent,
    NavigatorComponent,
    ListComponent,
    AlbumcardComponent,
    TitleComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
