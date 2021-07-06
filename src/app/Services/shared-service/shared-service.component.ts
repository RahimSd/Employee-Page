import { Component, OnInit ,OnDestroy } from '@angular/core';
import {BehaviorSubject}  from  'rxjs';
import {Observable}   from'rxjs';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-shared-service',
  templateUrl: './shared-service.component.html',
  styleUrls: ['./shared-service.component.css']
})
export class SharedServiceComponent implements OnInit {

  public sendData = new BehaviorSubject(null);
 employeeresponse: any = [];
 productData: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  isEmptyVal(val) {
    if (val === '' || val == null || val === undefined || val == 'EMPTY_') {
      return true;
    } else {
      return false;
    }
  }
 
}
