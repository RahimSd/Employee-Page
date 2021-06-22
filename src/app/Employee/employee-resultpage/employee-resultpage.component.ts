import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SharedServiceComponent } from 'src/app/Services/shared-service/shared-service.component';
import { Router} from '@angular/router';
import {PaginatePipe, PaginationService} from 'ng2-pagination';
@Component({
  selector: 'app-employee-resultpage',
  templateUrl: './employee-resultpage.component.html',
  styleUrls: ['./employee-resultpage.component.css']
})
export class EmployeeResultpageComponent implements OnInit {
  emplyeedata: any = [];
  FilterSearchBox:String  
  constructor(private location: Location, private sharedservice: SharedServiceComponent, private router: Router) { 
    this.FilterSearchBox ="";
  }

  ngOnInit() {
    this.emplyeedata = JSON.parse(sessionStorage.getItem('employeeresponse'));
    console.log('get session emplyeedata => ', this.emplyeedata);

  }
  previousRoute() {
    this.location.back();
  }
  deleteemployyedata(i) {
    console.log(i);
this.emplyeedata =this.sharedservice.employeeresponse; 
if(confirm("Are you sure to delete  : "+i.employeeName)) {
  const index = this.emplyeedata.indexOf(i);
  console.log('index', index);
  this.sharedservice.employeeresponse.splice(index, 1);
}
   
  }

  updateEmployeeData(employee){
    console.log(employee);
    let obj:any ={}
    obj['resp'] = [employee];
    obj['page'] = 'updateemployyeData';
    this.sharedservice.sendData.next(obj);
    this.router.navigate(['/employeeRegister'])
  }
  
}

