import { Pipe, PipeTransform } from '@angular/core';

@Pipe({      //decorador
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): number {
    return value* value
  }

}
