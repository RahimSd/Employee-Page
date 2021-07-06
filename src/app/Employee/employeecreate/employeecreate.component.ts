import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, FormControlName ,Validators, FormsModule} from '@angular/forms'
 import {Router,RouterModule} from '@angular/router'
@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css'],

})
export class EmployeecreateComponent implements OnInit {
  usersData = [];
  userID : any;
  showceateFor =false;
  getuser: any;
  @Input() item: any; 
  @Output() senddata   = new EventEmitter<any>();
  mynum = 0;
  mypromise: any;
  name: any;
  getinputval: any;
  employeeData: any = [];
  phonenumFag: boolean = false
  employeeForm; FormGroup;
  bankStatus: string;
  bankBalance =10;
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.generateform();
    this.mypromise = new Promise((resolve, reject) => {
      setTimeout( () => {
  resolve('mypromise1');
  resolve('mypromise2');
      },2000);
    });
    console.log('hostname',window.location.hostname);
    console.log('host',window.location.host);
    console.log('URL',this.router.url);
    this.userID =(Math.random())
    this.bankStatus =this.userID > 0  ? 'online': 'offline';    
  } 

generateform(){
this.employeeForm = this.fb.group({
  firstName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
  lastName:['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
  emailID: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ],
  contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  password:['', Validators.required],
  confirmPassword: ['',  Validators.required],
});
this.userForm = new FormGroup({
  name: new FormControl('')
});
}

get formAltaControls(): any {
  return this.employeeForm['controls'];
}
getVal(){
 this.employeeForm.get('firstName').valueChanges.subscribe(res => {
  this.getinputval  =res;
 });
  
}
checkphonenumber(event: any){
  /* const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
      event.preventDefault();

  } */
  
let val:  any;
this.employeeForm.get('contactNumber').valueChanges.subscribe(x =>{
  // console.log(x);
  // this.getinputval = x;
  let myval = x.substring(0,1);
  // console.log(myval);
 
  if(myval == 9 || myval== 6 || myval== 7 || myval== 8){
  this.phonenumFag=false;
  }
   else{
    this.phonenumFag=true;
    
   }
  
});
}
submitemployeeData(data){
this.employeeData.push(data);
console.log('employee data =>', this.employeeData);

}
resetAll(formvalues){
  this.employeeForm.reset();
  formvalues.forEach(element => {
    this.employeeForm.controls[element].setValue('');
  });

}
getvalues(event){
  this.name =event.key;
 console.log(this.name);
 
}
 increedata(){
   this.mynum++
this.senddata.emit(this.mynum);
console.log('child');
 }
 decreedata(){
   this.mynum --;
this.senddata.emit(this.mynum);
 }
 getUser(data){
  console.log(data);
 this.usersData.push(data);
 console.log('user data =>', this.usersData);
 
}
getbankststus(){
  return this.bankStatus;
}
getuserstatuscolor(){
  if(this.bankStatus === 'online'){
     return 'green';
  }
  return 'red';
}
}
