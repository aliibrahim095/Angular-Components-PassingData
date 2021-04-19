import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name;
  age;
  constructor() {}
  @Output() myEvent = new EventEmitter(); //emit == fire for event

  ngOnInit(): void {
    // let student = { name: this.name, age: this.age };
    // this.myEvent.emit(student);
  }
  Send() {
    let student = { name: this.name, age: this.age };
    this.myEvent.emit(student);
  }
}