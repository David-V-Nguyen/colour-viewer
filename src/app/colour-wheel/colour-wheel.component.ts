import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colour-wheel',
  templateUrl: './colour-wheel.component.html',
  styleUrls: ['./colour-wheel.component.css']
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

  constructor() { }

  ngOnInit(): void {
  }
  


}
