import { albumsList } from './../../shared/consts/albums.consts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  public titleAlbums = "Albums"
  public albums = albumsList;

  constructor() { }

  ngOnInit(): void {
  }

}
