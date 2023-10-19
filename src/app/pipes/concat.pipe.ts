import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: number, keyword: string): string {
    return "total: " + value
  }

}
