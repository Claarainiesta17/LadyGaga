import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumcard',
  templateUrl: './albumcard.component.html',
  styleUrls: ['./albumcard.component.scss']
})
export class AlbumcardComponent implements OnInit {
  @Input() album!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
