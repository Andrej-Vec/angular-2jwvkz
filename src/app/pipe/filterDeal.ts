import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDeal',
})
export class FilterCompanyPipe implements PipeTransform {
  transform(deals, filterValue) {
    if (filterValue == undefined) {
      return deals;
    }

    return deals.filter((item) => {
      return item.date  filterValue;
    });
  }
}
