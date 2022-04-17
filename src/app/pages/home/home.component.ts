import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public logoGaga = {
    title: "Gaga Logo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lady_Gaga_logo.png/1200px-Lady_Gaga_logo.png"
  }
  public Gaga = {
    title: "Gaga",
    image: "http://doucepagaille.fr/wp-content/uploads/2017/10/DoucePagaille-Gaga-FiveFootTwo-Slider.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
