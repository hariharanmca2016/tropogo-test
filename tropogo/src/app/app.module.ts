import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntituteDetailsComponent } from './intitute-details/intitute-details.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule, MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingDashboardComponent } from './listing-dashboard/listing-dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    IntituteDetailsComponent,
    CourseDateComponent,
    AddCourseComponent,
    ListingDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatNativeDateModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [MatExpansionModule],

  providers: [MatCheckboxModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
