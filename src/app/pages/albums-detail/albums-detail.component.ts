import { albumsList } from './../../shared/consts/albums.consts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.scss']
})
export class AlbumsDetailComponent implements OnInit {
  public album: any;
  public titleAlbumDetail = "Album's detail";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const albumID = Number(params.get("albumID"));

      this.album = albumsList.find((singleAlbum: any) => albumID === singleAlbum.id)
    })
  }
}
