import { Component, Input, Output, OnInit, DoCheck, ViewChild, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Renderer, ElementRef, forwardRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';
@Component({
  selector: 'app-tristate-checkbox',
  templateUrl: './tristate-component.component.html',
  styleUrls: ['./tristate-component.component.css']
})
export class TristateComponentComponent implements OnInit {
  
    public topLevel = false;
    public _items: any;
    private _subscription;
    public checkboxindeterminate = false;
    @Input() items: any;
    @Input() page: string;
    @Input() isSetChangeCheck: string;
    @ViewChild('theCheckbox') checkbox;
    @Output() valueChange = new EventEmitter();
    constructor(private _changeDetectorRef: ChangeDetectorRef) { }
  
    private setState() {
      if (!this._items) { return; }
      var count: number = 0;
      for (var i: number = 0; i < this._items.length; i++) {       
        count += this._items[i].isSelected ? 1 : 0;
        console.log('items', this._items);
        
      }
      if (count > 0 && count < i) {
        this.checkboxindeterminate = true;
      } else {
        this.checkboxindeterminate = false;
      }
    }
    ngDoCheck() {
      this.setState();
    }
    ngOnInit() { }
    ngAfterViewInit() {
      if(this.items){        
      this._subscription = this.items;
        this._items = this.items;
        this.setState();
        this._changeDetectorRef.detectChanges();
    }
  }
  
    ngAfterViewChecked() {
      if(this.items){
      this._subscription = this.items
        this._items = this.items;
        this.setState();
        this._changeDetectorRef.detectChanges();    
      }
  }
  topLevelChange() {
    for (var i: number = 0; i < this._items.length; i++) {
      this._items[i].isSelected = this.topLevel;
      console.log('ittt', this._items);
      console.log('toplevel', this.topLevel);
      
    }
  this.valueChange.emit();
  }
  }
  