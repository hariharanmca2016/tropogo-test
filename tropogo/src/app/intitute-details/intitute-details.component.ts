import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-intitute-details',
  templateUrl: './intitute-details.component.html',
  styleUrls: ['./intitute-details.component.css']
})
export class IntituteDetailsComponent implements OnInit {
  @Output() onPageChange = new EventEmitter<number>();
  constructor(private _snackBar: MatSnackBar) { }


  instituteName:any

  @ViewChild('attachments', {static: false}) attachment: any;
  selectedFile1: File;
  fileList1: File[] = [];
  listOfFiles1: any[] = [];

  selectedFile2: File;
  fileList2: File[] = [];
  listOfFiles2: any[] = [];

  selectedFile3: File;
  fileList3: File[] = [];
  listOfFiles3: any[] = [];


  selected1
  selected2
  selected3
  ngOnInit() {
  }

  clickUpload1(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile1 = event.target.files[i];
      this.fileList1.push(selectedFile1);
      this.listOfFiles1.push(selectedFile1.name)
  }

  this.attachment.nativeElement.value = '';
  }
  removeSelectedFile1(index) {
    // Delete the item from fileNames list
    this.listOfFiles1.splice(index, 1);
    // delete file from FileList
    this.fileList1.splice(index, 1);
   }

   //2
   clickUpload2(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile2 = event.target.files[i];
      this.fileList2.push(selectedFile2);
      this.listOfFiles2.push(selectedFile2.name)
  }

  this.attachment.nativeElement.value = '';
  }
  removeSelectedFile2(index) {
    // Delete the item from fileNames list
    this.listOfFiles2.splice(index, 1);
    // delete file from FileList
    this.fileList2.splice(index, 1);
   }

   //3
   clickUpload3(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile3 = event.target.files[i];
      this.fileList3.push(selectedFile3);
      this.listOfFiles3.push(selectedFile3.name)
  }

  this.attachment.nativeElement.value = '';
  }
  removeSelectedFile3(index) {
    // Delete the item from fileNames list
    this.listOfFiles3.splice(index, 1);
    // delete file from FileList
    this.fileList3.splice(index, 1);
   }

   nextpage(){
    if(this.instituteName == null || this.listOfFiles3.length==0){
      this._snackBar.open("Fill in th required information to process ", "", {
        duration: 2000,
        panelClass: ["mat-toolbar", "mat-warn"],
      });
    }else{
      console.log(this.instituteName,this.listOfFiles1, this.listOfFiles2, this.listOfFiles3)
      this.onPageChange.emit(2)
    }
   }

}
