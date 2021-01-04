import { AbstractControl } from '@angular/forms';

export class myValidators {
  
    // Precio mayor a 10,000 no permitido
  static isPriceValid(control: AbstractControl) {
  
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return { price_valid: true };
    }
  }
}
