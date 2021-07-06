import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TristateComponentComponent } from './tristate-component.component';

describe('TristateComponentComponent', () => {
  let component: TristateComponentComponent;
  let fixture: ComponentFixture<TristateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TristateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TristateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
