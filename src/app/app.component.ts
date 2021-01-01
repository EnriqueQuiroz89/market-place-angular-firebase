import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-store';

//array que usatra ngFor
items = ['nicolas', 'javier', 'leonel']

//funcion al hacer click en  agregar Item
agregarItem(){
    this.items.push('nuevo item')
}


eliminarItem(index: number){
  this.items.splice(index, 1);
}

}

