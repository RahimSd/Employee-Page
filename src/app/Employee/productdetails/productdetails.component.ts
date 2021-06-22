import { Component, OnInit } from '@angular/core';
import {FormsModule,FormControl, FormGroup,ReactiveFormsModule, Validators, FormBuilder} from "@angular/forms"
import { SharedServiceComponent } from 'src/app/Services/shared-service/shared-service.component';
import {Router} from "@angular/router"
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productForm : FormGroup;
errorFlagshow :string = ''
  constructor(private sharedservice:SharedServiceComponent, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.generateform();
  }
generateform(){
this.productForm =this.fb.group({
  productCntrl  :['',Validators.required],
  quantityCntrl : ['',Validators.required],
  priceCntrl : ['',Validators.required],
});
}
productDetails(data) {
  if(this.productForm.valid){
    this.sharedservice.productData.push(data);
    console.log('product data =>', this.sharedservice.productData);
    sessionStorage.setItem('productData', JSON.stringify(this.sharedservice.productData));
    this.router.navigate(['/productList'])
  }
}
resetAll(){
  this.productForm.reset();
}
}
