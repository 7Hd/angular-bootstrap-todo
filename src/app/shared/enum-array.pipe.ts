import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumArray'
})
export class EnumArrayPipe implements PipeTransform {
  transform(value: any, args?: any): any[] {
    const items = [];
    for (const key in value) {
      if (isNaN(parseInt(key, 10))) {
        items.push({ key: key, value: value[key] });
      }
    }
    return items;
  }
}
