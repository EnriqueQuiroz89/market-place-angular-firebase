import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // Tipando e indico que podria ser nulo
  public emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [        //Estado inicial, Array de validaciones
      Validators.required,
      Validators.email,
    ]);

    /*this.emailField.valueChanges
      .subscribe(value)*/
  }

  ngOnInit(): void {}

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.valid); 
    }
  }
}
