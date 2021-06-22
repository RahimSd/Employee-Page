import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedServiceComponent } from 'src/app/Services/shared-service/shared-service.component';
import { Location } from "@angular/common"
@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  getTotalpriceData: any;
  productListdata: any = [];
  totalproductprice: any = [];
  time: string = "morning";
  
  constructor(private location: Location, private sharedservice: SharedServiceComponent) { }

  ngOnInit() {
    
    this.productListdata = JSON.parse(sessionStorage.getItem('productData'));
    console.log('productList =>', this.productListdata);
    this.getTotalproductprice();
  }
  previousRoute() {
    this.location.back();
  }
  getTotalproductprice() {
    this.getTotalpriceData = this.sharedservice.productData.map(element => element.priceCntrl * element.quantityCntrl)
      .reduce((a, b) => a + b);
    /*   this.totalproductprice.push(element.priceCntrl * element.quantityCntrl);
      this.getTotalpriceData = this.totalproductprice.reduce((a,b) => a + b);
      console.log(' price :',this.totalproductprice);
      console.log('total price :',this.getTotalpriceData); */
    // console.log(this.getTotalpriceData);

  }
  deleteproduct(i) {
    this.productListdata = this.sharedservice.productData;
    if (confirm("Are you sure to delete  : " + i.productCntrl)) {
      const index = this.productListdata.indexOf(i);
      this.sharedservice.productData.splice(index, 1);
      this.getTotalproductprice();
      console.log(this.getTotalpriceData);
    }
  }
  addproduct(i){
console.log('adding =>', i);
this.productListdata = this.sharedservice.productData;
this.productListdata.push(i);
this.getTotalproductprice();
  }
  ngOnDestroy() {
    this.productListdata = [];
  }
  printproduct(){
    const printContent = document.getElementById("componentID");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }
}
