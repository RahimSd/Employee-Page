import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { SharedServiceComponent } from 'src/app/Services/shared-service/shared-service.component';

@Component({
  selector: 'app-emploee-registerdata',
  templateUrl: './emploee-registerdata.component.html',
  styleUrls: ['./emploee-registerdata.component.css']
})
export class EmploeeRegisterdataComponent implements OnInit, OnDestroy {
  backdata: any;
  editbuttonshow: boolean = false;
  emploeeregisterForm: FormGroup;
  errorFlag: boolean = false;
  count = 0;
  constructor(private router: Router, private sharedservice: SharedServiceComponent, private fb: FormBuilder) { }

  ngOnInit() {
    this.generateform();
    this.getUpdateData();
  }
  generateform() {
    this.emploeeregisterForm = this.fb.group({
      employeeID: new FormControl('', ),
      employeeName: new FormControl('', ),
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

      emploeeSalary: new FormControl('', ),
    })
  }
  employeeRegister(data) {

    if (!this.sharedservice.isEmptyVal(data.employeeName) && !this.sharedservice.isEmptyVal(data.email) && !this.sharedservice.isEmptyVal(data.emploeeSalary)) {
      this.sharedservice.employeeresponse.push(data);

      console.log('sharedservice.employeeresponse=> ', this.sharedservice.employeeresponse);
      this.errorFlag = false;;
      sessionStorage.setItem('employeeresponse', JSON.stringify(this.sharedservice.employeeresponse));
      this.router.navigate(['/employeeResult']);


    } else {
      this.errorFlag = true;
    }
    this.sharedservice.employeeresponse.forEach(element => {
      if(element.employeeID == this.emploeeregisterForm.get('employeeID').value){

      } 
     });
  }
  doUpdate(data) {
    if (!this.sharedservice.isEmptyVal(data.employeeName) && !this.sharedservice.isEmptyVal(data.email) && !this.sharedservice.isEmptyVal(data.emploeeSalary)) {
    const objIndex = this.sharedservice.employeeresponse.findIndex((obj => obj.employeeName == this.backdata[0].employeeName));
    console.log('objIndex =>', objIndex);
    console.log("Before update: ", this.backdata[objIndex]);
    this.sharedservice.employeeresponse[objIndex].employeeName = this.emploeeregisterForm.get('employeeName').value;
    this.sharedservice.employeeresponse[objIndex].email = this.emploeeregisterForm.get('email').value;
    this.sharedservice.employeeresponse[objIndex].emploeeSalary = this.emploeeregisterForm.get('emploeeSalary').value;

    console.log("After update: ", this.backdata[objIndex]);
    console.log(this.sharedservice.employeeresponse);
    console.log(this.backdata);
    sessionStorage.setItem('employeeresponse', JSON.stringify(this.sharedservice.employeeresponse));
    this.router.navigate(['/employeeResult']);

  } else {
    this.errorFlag = true;
  }

  }
  getUpdateData() {
    this.sharedservice.sendData.subscribe(res => {
      console.log('got subscribe update data => ', res);
      if (!this.sharedservice.isEmptyVal(res) && res['page'] === "updateemployyeData") {
        this.editbuttonshow = true;
        this.backdata = res['resp'];
        this.backdata.forEach(ele => {
          console.log('ele =>', ele.employeeName);
          this.emploeeregisterForm.get('employeeName').setValue(ele.employeeName);
          this.emploeeregisterForm.get('emploeeSalary').setValue(ele.emploeeSalary);
          this.emploeeregisterForm.get('email').setValue(ele.email);
        });

      }
    });
  }
  ngOnDestroy() {
    let obj = null;
    this.sharedservice.sendData.next(obj);
  }
}