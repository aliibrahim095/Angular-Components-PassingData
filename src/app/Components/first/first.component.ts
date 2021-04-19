import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name;
  age;
  constructor() { }

  ngOnInit(): void {
  }

  students:{name:string,age:number}[]=[];

  // students:{name:string,age:number}[]=[];
  AddNewStudent(){
    let student:{name:string,age:number}={name:this.name,age:this.age};
    this.students.push(student);
    this.name="";
    this.age="";

    // this.name="";
    // this.age=0;
  }

}
