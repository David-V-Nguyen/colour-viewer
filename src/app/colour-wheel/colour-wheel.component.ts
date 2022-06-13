import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colour-wheel',
  templateUrl: './colour-wheel.component.html',
  styleUrls: ['./colour-wheel.component.css'],

})
export class ColourWheelComponent implements OnInit {

  color: string = '#2889e9';
  arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };

  selectedColor: string = 'color1';

  colorsArray: any;
  
  constructor() { }

  ngOnInit(): void {
    this.colorsArray = [
      "#f44336", "#e91e63", "#9c27b0", "#673ab7", 
      "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", 
      "#009688", "#4caf50", "#8bc34a", "#cddc39", 
      "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", 
      "#795548", "#607d8b"
    ];

    

  }
  
}
