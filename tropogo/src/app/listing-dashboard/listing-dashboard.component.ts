import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-dashboard',
  templateUrl: './listing-dashboard.component.html',
  styleUrls: ['./listing-dashboard.component.css']
})
export class ListingDashboardComponent implements OnInit {
  @Output() onPageChange = new EventEmitter<number>();
  constructor(public router: Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['http://staging.sadyakkegothilla.com/tropogo/'])
  }

}
