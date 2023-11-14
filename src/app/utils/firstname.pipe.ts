import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstnamePipe'
})
export class FirstnamePipe implements PipeTransform {

  transform(value: string): string {

    if(value) return value.charAt(0).toUpperCase()+value.substring(1).toLocaleLowerCase();
    else return "";
  }

}
