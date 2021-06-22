import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcreationpageComponent } from './postcreationpage.component';

describe('PostcreationpageComponent', () => {
  let component: PostcreationpageComponent;
  let fixture: ComponentFixture<PostcreationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcreationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcreationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
