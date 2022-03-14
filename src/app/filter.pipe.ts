import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, user_In: string, propName: string): unknown {
    if(value.length === 0 || user_In === ''){
      return value;
    }    
    let resultArray = [];
    for(let item of value){
      if(item[propName] === user_In)
        resultArray.push(item);
    }
    return resultArray;
  }

}
