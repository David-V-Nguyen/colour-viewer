import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colour-wheel',
  templateUrl: './colour-wheel.component.html',
  styleUrls: ['./colour-wheel.component.css']
})
export class ColourWheelComponent implements OnInit {

  fillColor = 'rgb(255, 0, 0)';


  constructor() { }

  ngOnInit(): void {
  }
  
  changeColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = 'rgb(${r}, ${g}, ${b}';
    
  }


}
