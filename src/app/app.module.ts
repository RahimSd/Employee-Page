import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PostcreationpageComponent } from './Postcreation/postcreationpage/postcreationpage.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { EmployeecreateComponent } from './Employee/employeecreate/employeecreate.component';
import { EmploeeRegisterdataComponent } from './Employee/emploee-registerdata/emploee-registerdata.component';
import { RouterModule, Router}  from '@angular/router';
import { EmployeeResultpageComponent } from './Employee/employee-resultpage/employee-resultpage.component';
import { SharedServiceComponent } from './Services/shared-service/shared-service.component'
import { MysearchPipe } from 'src/app/PIPES/search.pipe';
import {Ng2PaginationModule} from 'ng2-pagination';
import { NumberOnlyDirectiveDirective } from './Directives/number-only-directive.directive';
import { ProductdetailsComponent } from './Employee/productdetails/productdetails.component';
import { ProductListPageComponent } from './Employee/product-list-page/product-list-page.component';
import { MenuBarComponent } from './Employee/menu-bar/menu-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    PostcreationpageComponent,
    EmployeecreateComponent,
    EmploeeRegisterdataComponent,
    EmployeeResultpageComponent,
    MysearchPipe,
    NumberOnlyDirectiveDirective,
    ProductdetailsComponent,
    ProductListPageComponent,
    MenuBarComponent,
     
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PaginationModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"employeecreate",component:EmployeecreateComponent},
      {path:"employeeRegister",component:EmploeeRegisterdataComponent},
      {path:"",component:EmployeeResultpageComponent},
      {path:"employeeResult",component:EmployeeResultpageComponent},
      {path:"postcreation",component:PostcreationpageComponent},
      {path:"productDetails",component:ProductdetailsComponent},
      {path:"productList",component:ProductListPageComponent},
      {path:"**",component:EmployeecreateComponent},
    ]),
  ],
  providers: [SharedServiceComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
