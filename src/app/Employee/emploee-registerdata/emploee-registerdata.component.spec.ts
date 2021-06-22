import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploeeRegisterdataComponent } from './emploee-registerdata.component';

describe('EmploeeRegisterdataComponent', () => {
  let component: EmploeeRegisterdataComponent;
  let fixture: ComponentFixture<EmploeeRegisterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploeeRegisterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploeeRegisterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
