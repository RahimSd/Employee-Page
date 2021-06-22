import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'search'
})
export class MysearchPipe implements PipeTransform {
    transform(inputdata, searchCriteria) {
        if (searchCriteria === "") {
            return inputdata;
        } else {
            let result = inputdata.filter( x => {
                return x.employeeName.toLowerCase().indexOf(searchCriteria.toLowerCase()) > -1 ||
                 x.emploeeSalary.toLowerCase().indexOf(searchCriteria.toLowerCase()) > -1 ||
                 x.email.toLowerCase().indexOf(searchCriteria.toLowerCase()) > -1
            });
            return result;
        }
}
}