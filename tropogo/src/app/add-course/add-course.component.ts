import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  @Output() onPageChange = new EventEmitter<number>();

  courseDetails
  public addCourse: any[] = [{
    courseName: '',
    airCraft: '',
    startDate: '',
    endDate: '',
    location: '',
    language: '',
    cost: '',
  }];

  locations = [
    {value: 'Bangalore', viewValue: 'Bangalore'},
    {value: 'Chennai', viewValue: 'Chennai'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Delhi', viewValue: 'Delhi'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Noida', viewValue: 'Noida'},
    {value: 'Jammmu', viewValue: 'Jammmu'}
  ];
  language = [
    {value: 'English', viewValue: 'English'},
    {value: 'Hindi', viewValue: 'Hindi'},
    {value: 'Kannada', viewValue: 'Kannada'}
  ];
  constructor(private _snackBar: MatSnackBar) { }
  list:any
  courseName :any
  ngOnInit() {
  }
  addForm() {
    this.addCourse.push({
      id: this.addCourse.length + 1,
      courseName: '',
    airCraft: '',
    startDate: '',
    endDate: '',
    location: '',
    language: '',
    cost: '',

    });
  }

  delete(i: number){
    this.addCourse.splice(i, 1);
  }
reset(i:number){
  this.addCourse[i] = ({
    courseName: '',
  airCraft: '',
  startDate: '',
  endDate: '',
  location: '',
  language: '',
  cost: '',

  });
}
collapseCourse(index: number){
  document.getElementById('collapseOne' + index).classList.toggle('collapse')
}
nextPage(){
  if(this.courseName == null ||
    this.addCourse[0].startDate == undefined || this.addCourse[0].endDate == undefined ||
    this.addCourse[0].location == undefined || this.addCourse[0].language== undefined || this.addCourse[0].cost == undefined){
    this._snackBar.open("Fill in th required information to process ", "", {
      duration: 2000,
      panelClass: ["mat-toolbar", "mat-warn"],
    });
  }else{
    console.log(this.courseName,this.addCourse[0].startDate, this.addCourse[0].endDate, this.addCourse[0].location, this.addCourse[0].language, this.addCourse[0].cost)
    this.onPageChange.emit(3)
  }
}
skipDashboard(){
  this.onPageChange.emit(3)
}

}
