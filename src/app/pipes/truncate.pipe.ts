import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let length = (args[0] > 0) ? args[0] : 100;
    let endText = (args[1] != undefined) ? args[1] : '...';
    return value.slice(0, length) + ' ' + endText;
  }

}
