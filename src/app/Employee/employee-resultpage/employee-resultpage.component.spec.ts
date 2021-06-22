import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResultpageComponent } from './employee-resultpage.component';

describe('EmployeeResultpageComponent', () => {
  let component: EmployeeResultpageComponent;
  let fixture: ComponentFixture<EmployeeResultpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResultpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
