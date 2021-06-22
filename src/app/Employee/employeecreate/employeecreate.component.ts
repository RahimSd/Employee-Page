import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroup, FormControlName ,Validators, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  employeeData :any  =[];
  phonenumFag: boolean = false
  employeeForm; FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.generateform()
  } 
generateform(){
this.employeeForm = this.fb.group({
  firstName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
  lastName:['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
  emailID: ['',[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ],
  contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  password:['', Validators.required],
  confirmPassword: ['',  Validators.required],
})
}

get formAltaControls(): any {
  return this.employeeForm['controls'];
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
}
