import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(input: any): any {

    if (isStringOrInteger(input)) {
      return input.split('').reverse().join('');
    }
  }

}

export function isStringOrInteger(value: any) {
  return typeof value === 'string';
}
