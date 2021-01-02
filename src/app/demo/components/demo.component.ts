import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'web-store';
  power = 10;
  // funcion al hacer click en  agregar Item
  agregarItem(): void {
    this.items.push('nuevo item');
  }

  eliminarItem(index: number): void {
    this.items.splice(index, 1);
  }

  items = ['nicolas', 'javier', 'leonel'];

  



}
