import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntituteDetailsComponent } from './intitute-details.component';

describe('IntituteDetailsComponent', () => {
  let component: IntituteDetailsComponent;
  let fixture: ComponentFixture<IntituteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntituteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntituteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
