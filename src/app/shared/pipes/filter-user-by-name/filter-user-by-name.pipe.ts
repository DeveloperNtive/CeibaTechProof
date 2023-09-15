import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUserByName',
})
export class FilterUserByNamePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    if (searchText.length >= 3) {
      return items.filter((item) => {
        return item.first_name.toLowerCase().includes(searchText);
      });
    }else{
      return items
    }
  }
}
