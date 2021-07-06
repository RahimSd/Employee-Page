import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tittle ="EMployee page";
  count = 0;
  constructor(){
    console.log('calling appcomponent');
  }
   getcount(event){
     this.count =event;
     console.log(this.count);
     
   }

}
