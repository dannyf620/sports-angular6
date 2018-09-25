import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    console.log(value, args)
    if (value) {
      return value.filter((v) => {
        return v[args[0]].toLocaleLowerCase().includes(args[1].toLocaleLowerCase())
      })
    }
    return null;
  }

}
