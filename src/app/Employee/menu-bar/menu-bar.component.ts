import { Component, OnInit } from '@angular/core';
import { SharedServiceComponent } from 'src/app/Services/shared-service/shared-service.component';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private sharedservice: SharedServiceComponent) { }

  ngOnInit() {
  }
 
}
