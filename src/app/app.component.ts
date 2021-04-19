import { Component, Input , Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'component-data-passing';

  
  recievedStd;
  students:{name:string,age:number}[]=[];

  RecieveData(data){
    console.log(data);
    this.students.push(data);
  }
}