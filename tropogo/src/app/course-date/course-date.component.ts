import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css']
})
export class CourseDateComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  step = 0;

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }
  delete(){

  }
reset(){

}

}
