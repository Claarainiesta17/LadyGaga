import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public titleAbout = "About";
  public aboutPicture = {
    title: "About Picture",
    image: "https://64.media.tumblr.com/e917c646731eacd9bd7c5ac4e5b4ed2c/tumblr_ovsttwUGXR1viwt2yo1_1280.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
