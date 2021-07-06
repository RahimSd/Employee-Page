import { Component, OnInit,VERSION  } from '@angular/core';
import { Location } from '@angular/common';
import { SharedServiceComponent } from 'src/app/Services/shared-service/shared-service.component';
import { Router} from '@angular/router';
import {PaginatePipe, PaginationService} from 'ng2-pagination';
import {Observable} from 'rxjs';
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
    const mypromise = new Promise((resolve,reject) => {
      setTimeout( () => {
        resolve('promice1');
        resolve('promice2');
      },3000);
  
    });
    mypromise.then(result => {
      console.log('promise' , result);
      
    });
    const myobservable = new Observable((observale) => {
      setTimeout(() => {;
        observale.next('obeservable');
        observale.next('obeservable2');
        observale.next('obeservable3');
      },3000);
    });
    myobservable.subscribe(resu => {
      console.log('observable' , resu);
      
    });
    console.log(VERSION.full);
    console.log(VERSION.major);
    console.log(VERSION.minor);
    console.log(VERSION.patch);
    
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
   getemployeeData(){
     let selectedList = this.emplyeedata.filter(ele => ele.isSelected == true);
     console.log('selectedList =>', selectedList);
     
   }
}

