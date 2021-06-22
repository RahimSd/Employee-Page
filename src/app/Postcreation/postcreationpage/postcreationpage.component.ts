import { AnimationStyleMetadata } from '@angular/animations';
import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControlName, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-postcreationpage',
  templateUrl: './postcreationpage.component.html',
  styleUrls: ['./postcreationpage.component.css']
})
export class PostcreationpageComponent implements OnInit {
  postUserdataformgroup: FormGroup;
  response: any = [];
  showflag: boolean = false;
  errorshow: boolean = false;
  regexshowg: boolean = false;
  bodymaxlengthfalg: boolean = false;
  constructor() { }

  ngOnInit() {
    this.generateform();

  }

  generateform() {
    this.postUserdataformgroup = new FormGroup({
      titleCntrl: new FormControl('', Validators.required),
      bodyCntrl: new FormControl('', Validators.required),
      mobileNo: new FormControl('', Validators.required),

    })
  }
  keyPress(event: any) {
 /*    const pattern = /^[6-9]\d{9}$;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    } */
  }
  postusersData(data) {

      this.showflag = true;

      if (data.bodyCntrl.length <= 50) {
        this.bodymaxlengthfalg = false;

        this.response.push(data);
        console.log('data =>', this.response);
        this.errorshow = false;
        this.regexshowg = false;
      } else {
        this.bodymaxlengthfalg = true;
        this.errorshow = false;
      }
   
  }
  deletedata(d) {
    const index = this.response.indexOf(d);
    this.response.splice(index, 1);  
    }
  reserAll() {
    this.postUserdataformgroup.get('titleCntrl').setValue('');
    this.postUserdataformgroup.get('bodyCntrl').setValue('');
    this.errorshow = false;

  }

}
