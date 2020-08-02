import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public photoPath = 'https://marieservanebellet.com:5001/photo.jpg';
  public show = false;

  constructor() { }

  ngOnInit(): void {
    document.getElementById('top').scrollTo(0, 0);
  }

}