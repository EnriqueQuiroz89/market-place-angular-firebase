import { Component } from "@angular/core";
import { Persona } from "./persona.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  personas: Persona[] = [
    {
      nombre: "messi",
      imagen:
        "https://cdn.pixabay.com/photo/2017/01/25/17/20/lionel-2008448_960_720.jpg"
    },
    {
      nombre: "mbape",
      imagen:
        "https://cdn.pixabay.com/photo/2017/09/10/19/09/boy-2736659_960_720.jpg"
    },
    {
      nombre: "puyol",
      imagen:
        "https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417_960_720.jpg"
    }
  ];
}
